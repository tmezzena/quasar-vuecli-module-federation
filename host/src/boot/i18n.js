import { createI18n } from "vue-i18n";

import messages from "src/i18n";
import { Quasar } from "quasar";

//import { pinia } from "boot/pinia";
//import { useAppStore } from "src/pinia/app";

//-- i18n
const fallback = Quasar.lang.getLocale();

const i18n = createI18n({
  locale: fallback,
  fallbackLocale: fallback,
  messages,
});

export default ({ app }) => {
  //const appStore = useAppStore(pinia);

  // Set i18n instance on app
  app.use(i18n);

  /*
  const locale = appStore.locale || fallback;
  if (locale !== fallback) {
    i18n.global.locale = locale;

    import("quasar/lang/" + locale).then((lang) => {
      Quasar.lang.set(lang.default, ssrContext);
    });
  }
  */
};

export { i18n };
