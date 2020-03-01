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
        :key="'content-block-' + idx + '::' + uuid"
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
      required: true
    },
    blog: {
      type: Object,
      required: false
    }
  },
  methods: {
    uuid() {
      return uuidv4();
    }
  }
};
</script>

<style lang="scss" scoped>
.blocks::v-deep {
  .quote-container + div > p {
    text-indent: 25px;
    margin-top: -65px;

    &:before {
      content: "\2014\00A0";
    }
  }
}
</style>
