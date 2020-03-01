<template>
  <AllPosts />
</template>

<script>
import AllPosts from "../components/AllPosts";
import { mapState } from "vuex";

export default {
  name: "Index",
  components: { AllPosts },
  computed: mapState({
    blog: state => state.blog
  })
};
</script>
