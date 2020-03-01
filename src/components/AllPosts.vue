<template>
  <div v-masonry transition-duration="0.3s" item-selector=".post">
    <b-row no-gutters class="posts">
      <Post
        v-for="(post, idx) in posts"
        :key="'post-' + idx"
        :post="post"
        class="post"
        v-masonry-tile
      />
    </b-row>
  </div>
</template>

<script>
import Post from "./Post";
import { mapState } from "vuex";

export default {
  name: "AllPosts",
  components: { Post },
  computed: mapState({
    posts: state => state.blog.posts
  })
};
</script>
