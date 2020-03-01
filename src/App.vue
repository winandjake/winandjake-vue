<template>
  <b-container>
    <Header :blog="blog" />
    <Intro />
    <router-view></router-view>
  </b-container>
</template>

<script>
import Header from "./components/structure/Header";
import Intro from "./components/structure/Intro";
import { mapState } from "vuex";

export default {
  name: "App",
  components: { Header, Intro },
  computed: mapState({
    blog: state => state.blog
  })
};
</script>
