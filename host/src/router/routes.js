import main from "./areas/main";
import { h, resolveComponent } from "vue";

export default function () {
  const routes = [
    {
      name: "root",
      path: "/",
      component: {
        render() {
          return h(resolveComponent("router-view"));
        },
      },
      children: [
        {
          path: "",
          redirect: (/*to*/) => {
            //const store = null;
            const logged = false; /* store.getters["app/isLogged"]() */
            return !logged ? { name: "home" } : { name: "home" };
          },
        },
        {
          name: "test",
          path: "test",
          component: () => import("layouts/main/index.vue"),
          children: [
            {
              name: "testtest",
              path: "test",
              component: () => import("pages/home/index.vue"),
            },
          ],
        },
        main(),
      ],
    },
  ];

  routes.push({
    path: "/:catchAll(.*)*",
    component: () => import("/src/pages/Error404.vue"),
  });

  return routes;
}
