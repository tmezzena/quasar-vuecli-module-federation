import { createApp } from "vue";
import App from "./App.vue";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";

import federationInject from "src/federation/inject";

const app = createApp(App);

app.use(Quasar, quasarUserOptions);

(async () => {
  const hostBootModule = await import("host/boot/index.js");
  const {
    default: useBoot,
    router,
    pinia,
    i18n,
    mainLayoutStore,
  } = hostBootModule;

  federationInject({ app, router, pinia, i18n, mainLayoutStore });

  useBoot({ app });

  app.mount("#app");
})();
