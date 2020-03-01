<template>
  <div>
    <span v-if="blog"
      ><a :href="blog.url" target="_blank">
        <strong>{{ blog.name }}</strong></a
      >:</span
    >
    <div
      class="blocks"
      v-for="(block, idx) in content"
      :key="'content-block-' + idx + '::' + uuid"
    >
      <PostContentBlock :block="block" />
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
    layout: {
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
