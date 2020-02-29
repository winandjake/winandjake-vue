<template>
  <div>
    <h1>{{ blog }}</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Index",
  computed: mapState({
    blog: state => state.blog
  })
};
</script>
