export default function () {
  return {
    path: "app1",
    component: () => import("host/layouts/main/index.vue"),
    children: [
      {
        name: "app1feature1",
        path: "feature1",
        component: () => import("pages/App1Feature1/index.vue"),
      },
    ],
    meta: {
      authorize: false,
    },
  };
}
