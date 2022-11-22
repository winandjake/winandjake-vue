import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// import dummy from "../dummy";

export default new Vuex.Store({
  state: {
    blog: window.blog || {} /*dummy*/,
  },
});
