<template>
  <div>
    <span v-if="blog"
      ><a :href="blog.url" target="_blank">
        <strong>{{ blog.name }}</strong></a
      >:</span
    >
    <div class="blocks">
      <PostContentBlock
        v-for="(block, idx) in content"
        :key="'content-block-' + idx + '::' + uuid()"
        :block="block"
      />
    </div>
  </div>
</template>

<script>
import PostContentBlock from "./PostContentBlock";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "PostContentEntry",
  components: { PostContentBlock },
  props: {
    content: {
      type: Array,
      required: true,
    },
    blog: {
      type: Object,
      required: false,
    },
  },
  methods: {
    uuid() {
      return uuidv4();
    },
  },
};
</script>

<style lang="scss" scoped>
.blocks::v-deep {
  p:last-of-type {
    padding-bottom: 10px;
  }

  .quote-container + div > p {
    text-indent: 25px;
    margin-top: -65px;

    &:before {
      content: "\2014\00A0";
    }
  }

  .ul,
  .ol {
    list-style-type: none;
  }

  .ordered-list-item-container {
    counter-increment: ul;

    li:before {
      content: counter(ul) ". ";
    }
  }

  .unordered-list-item-container {
    li:before {
      content: "\2022";
    }
  }

  .ordered-list-item-container,
  .unordered-list-item-container {
    margin-left: 15px;

    &:last-of-type {
      padding-bottom: 10px;
    }
  }

  iframe {
    display: block;
    width: 100%;
  }
}
</style>
