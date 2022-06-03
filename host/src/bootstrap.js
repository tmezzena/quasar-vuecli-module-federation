import { createApp } from "vue";
import App from "./App.vue";

import useBoot, { router, i18n, pinia, mainLayoutStore } from "src/boot";

import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";

const app = createApp(App);

app.use(Quasar, quasarUserOptions);

var moduleInjected = false;
const moduleInjectPromise = new Promise((resolve) => {
  import("app1/federation/inject.js").then((app1InjectModule) => {
    const app1Inject = app1InjectModule.default;
    app1Inject({ app, router, i18n, pinia, mainLayoutStore });
    moduleInjected = true;
    resolve();
  });
});

router.beforeEach(async (to) => {
  if (!moduleInjected) {
    await moduleInjectPromise;
    if (!to.name) {
      return to.fullPath;
    }
  }
  return true;
});

useBoot({ app });

moduleInjectPromise.then(() => {
  app.mount("#app");
});

/*
(async () => {
  useBoot({ app });

  const app1InjectModule = await import("app1/federation/inject.js");
  const app1Inject = app1InjectModule.default;

  app1Inject({ app, router, i18n, pinia, mainLayoutStore });

  app.mount("#app");
})();
*/
