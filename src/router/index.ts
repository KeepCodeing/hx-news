import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  { name: "idx", path: "/", redirect: "/index" },
  {
    name: "index",
    path: "/index",
    component: () => import("../views/index/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
