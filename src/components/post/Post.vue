<template>
  <b-col cols="12" md="6">
    <b-card no-body>
      <template #header>
        <PostHeader :post="post" />
      </template>
      <PostBody :post="post" :author="author" />
      <template #footer>
        <PostFooter :post="post" />
      </template>
    </b-card>
  </b-col>
</template>

<script>
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";

export default {
  name: "Post",
  components: { PostHeader, PostBody, PostFooter },
  props: {
    post: {
      type: Object,
      required: true,
    },
    author: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  background: rgba(255, 255, 255, 0) !important;
  margin: 8px 10px;

  .card-header,
  .card-footer {
    background: rgba(183, 108, 138, 0.93);
  }

  .card-body,
  blockquote {
    background: white;
  }
}
</style>
