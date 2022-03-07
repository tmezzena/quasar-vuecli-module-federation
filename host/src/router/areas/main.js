export default function () {
  return {
    name: "main",
    path: "main",
    component: () => import("layouts/main/index.vue"),
    children: [
      {
        name: "home",
        path: "home",
        component: () => import("pages/home/index.vue"),
      },
    ],
    meta: {
      authorize: false,
    },
  };
}
