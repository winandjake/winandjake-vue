<template>
  <b-container>
    <Header :blog="blog" />
    <Intro />
    <router-view></router-view>
  </b-container>
</template>

<script>
import Header from "./components/Header";
import Intro from "./components/Intro";

export default {
  name: "App",
  components: { Header, Intro },
  data() {
    return {
      blog: {}
    };
  },
  created() {
    this.blog = this.$root.$data;
  }
};
</script>
