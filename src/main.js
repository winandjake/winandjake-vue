import Vue from "vue";

import Vuex from "vuex";
Vue.use(Vuex);

import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

import { VueMasonryPlugin } from "vue-masonry";
Vue.use(VueMasonryPlugin);

import { library as fontawesome } from "@fortawesome/fontawesome-svg-core";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
fontawesome.add(faRetweet);
Vue.component("fa", FontAwesomeIcon);

import router from "./assets/router";
import store from "./assets/store";
import App from "./App";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
