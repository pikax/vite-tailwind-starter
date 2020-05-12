import {
  createRouter,
  createWebHistory,
  createMemoryHistory,
} from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import NotFound from "./views/NotFound.vue";

let routes = [
  { path: "/", component: Home, meta: { title: "Home" } },
  { path: "/about", component: About, meta: { title: "About" } },
  { path: "/:path(.*)", component: NotFound },
];

const router = createRouter({
  history:
    typeof window !== "undefined" ? createWebHistory() : createMemoryHistory(),
  routes: __DEV__ ? [] : routes,
});

if (__DEV__ && typeof window !== "undefined") {
  let removeRoutes = [];

  for (let route of routes) {
    removeRoutes.push(router.addRoute(route));
  }

//   hot.accept("./routes.js", ({ routes }) => {
//     for (let removeRoute of removeRoutes) removeRoute();
//     removeRoutes = [];
//     for (let route of routes) {
//       removeRoutes.push(router.addRoute(route));
//     }
//     router.replace("");
//   });
}

export default router;
