<template>
  <header>
    <NavBar :blog="blog" />
    <img
      :src="blog.portrait['128']"
      :class="blog.global_appearance.avatar_shape"
    />
  </header>
</template>

<script>
import NavBar from "./NavBar";

export default {
  name: "Header",
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  components: { NavBar },
};
</script>

<style lang="scss" scoped>
header {
  background-image: url("https://static.tumblr.com/iyt3evq/gFYpmqkev/headerbg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 3px solid #000;
  border-top: 0;
  height: 400px;

  img {
    width: 128px;
    position: absolute;
    top: 300px;
    left: 0;
    right: 0;
    margin: auto;
    border: 3px solid #000;

    &.circle {
      border-radius: 100%;
    }
  }
}
</style>
