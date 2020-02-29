import Vue from "vue";

import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

import router from "./assets/router";
import App from "./App";
// import dummy from "./dummy";

new Vue({
  router,
  render: h => h(App),
  data: () => window.blog || {}/*dummy*/
}).$mount("#app");
