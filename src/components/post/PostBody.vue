<template>
  <div class="card-body">
    <div class="reblog" v-if="isReblogged">
      <div class="from">
        <fa :icon="['fas', 'retweet']"></fa>
        {{ immediateReblog.blog.name }}
      </div>
      <div class="content">
        <div
          class="entry"
          v-for="(entry, idx) in npf.trail"
          :key="'reblog-trail-' + idx"
        >
          <PostContentEntry :content="entry.content" :blog="entry.blog" />
        </div>
      </div>
    </div>
    <hr v-if="isReblogged && hasOwnContent" />
    <div class="content" v-if="hasOwnContent">
      <PostContentEntry :content="npf.content" />
    </div>
  </div>
</template>

<script>
import PostContentEntry from "./PostContentEntry";

export default {
  name: "PostBody",
  components: { PostContentEntry },
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
  computed: {
    npf() {
      return this.post.npf;
    },
    isReblogged() {
      return !!this.npf.trail.length;
    },
    immediateReblog() {
      if (!this.isReblogged) return {};
      // Must get the last entry in the trail
      return this.npf.trail[this.npf.trail.length - 1];
    },
    hasOwnContent() {
      return !!this.npf.content.length;
    },
  },
};
</script>

<style lang="scss" scoped>
.card-body {
  padding: 0;

  .reblog {
    .from {
      background: rgba(194, 141, 232, 0.91);
      padding: 2px 10px;
      a {
        color: #e9d796;
        text-decoration: none;
        font-weight: regular;

        &:active,
        &:hover {
          color: #d0b75c;
        }
      }
    }
  }
}
</style>
