import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/latest",
      name: "latest",
      component: () =>
        import(/* webpackChunkName: "latest" */ "./views/LatestUrls.vue")
    },
    {
      path: "*",
      component: () =>
        import(/* webpackChunkName: "errors" */ "./views/NotFound.vue")
    }
  ]
});
