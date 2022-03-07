import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  //history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes: routes(),
});

export default router;
