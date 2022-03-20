<template>
  <nav>
    <ul>
      <router-link to="/"><li>Home</li></router-link>
      <router-link to="/ourstory"><li>Our Story</li></router-link>
      <span v-if="hasPages">
        <a
          v-for="(page, idx) in blog.custom_pages"
          :key="'page-' + idx"
          :href="page.url"
        >
          {{ page.label }}
        </a>
      </span>
      <span v-if="submissionsEnabled">
        <router-link to="/submit">
          <li>{{ blog.navigation.submit_label }}</li>
        </router-link>
      </span>
      <span v-if="askEnabled">
        <router-link to="/ask">
          <li>{{ blog.navigation.ask_label }}</li>
        </router-link>
      </span>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  computed: {
    hasPages() {
      return (
        Object.prototype.hasOwnProperty.call(this.blog, "custom_pages") &&
        Object.keys(this.blog.custom_pages).length
      );
    },
    submissionsEnabled() {
      return Object.prototype.hasOwnProperty.call(
        this.blog.navigation,
        "submit_label"
      );
    },
    askEnabled() {
      return Object.prototype.hasOwnProperty.call(
        this.blog.navigation,
        "ask_label"
      );
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  height: auto;
  text-align: center;
  padding-top: 10px;

  ul {
    list-style-type: none;

    a {
      color: #4e4300;

      &:hover,
      &:active {
        color: #9a870f;
        text-decoration: none;
      }
    }

    li {
      display: inline-block;
      background: #9e8b1d;
      border: 2px solid #786804;
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      border-radius: 4px;
      padding: 10px;
      margin-right: 5px;

      &:hover {
        background: #6a5c03;
        border: 2px solid #9e8b1d;
      }
    }
  }
}
</style>
