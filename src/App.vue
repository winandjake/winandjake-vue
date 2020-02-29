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
import { mapState } from "vuex";

export default {
  name: "App",
  components: { Header, Intro },
  computed: mapState({
    blog: state => state.blog
  }),
  created() {
    this.blog = this.$root.$data;
  }
};
</script>
