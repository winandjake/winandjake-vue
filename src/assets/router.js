import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Index from "../pages/Index";

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: {
        template: "<router-view/>"
      },
      children: [
        {
          path: "",
          name: "Index",
          component: Index
        }
      ]
    }
  ]
});
