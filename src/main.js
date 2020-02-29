import Vue from "vue";

import Vuex from "vuex";
Vue.use(Vuex);

import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

import router from "./assets/router";
import store from "./assets/store";
import App from "./App";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
