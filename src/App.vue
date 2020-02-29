<template>
    <b-container>
      <Header :blog="blog" />
    </b-container>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: { Header },
  data() {
    return {
      blog: null
    }
  },
  created() {
    this.blog = this.$root.$data
  }
}
</script>