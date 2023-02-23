import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      path: "/:pathMatch(.*)*",
      component: () =>
        import(/* webpackChunkName: "errors" */ "./views/NotFound.vue")
    }
  ]
});
