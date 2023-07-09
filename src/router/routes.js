const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/num",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/num.vue") }],
  },
  {
    path: "/td",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/t0d0.vue") }],
  },
  {
    path: "/fps",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("src/pages/fpspage.vue") }],
  },
  {
    path: "/kitchen",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("src/pages/kitH.vue") }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
