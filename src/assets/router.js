import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Index from "../pages/Index";
import OurStory from "../pages/OurStory";
import AskUsAnything from "../pages/AskUsAnything";
import SubmitAPost from "../pages/SubmitAPost";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: {
        template: "<router-view/>",
      },
      children: [
        {
          path: "",
          name: "Index",
          component: Index,
        },
        {
          path: "ourstory",
          name: "OurStory",
          component: OurStory,
        },
        {
          path: "ask",
          name: "AskUsAnything",
          component: AskUsAnything,
        },
        {
          path: "submit",
          name: "SubmitAPost",
          component: SubmitAPost,
        },
      ],
    },
  ],
});
