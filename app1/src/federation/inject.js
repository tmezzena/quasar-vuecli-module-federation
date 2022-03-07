import app1routes from "src/router/areas/app1";
import messages from "src/i18n";

export default function ({ /*app, pinia*/ router, i18n, mainLayoutStore }) {
  if (router) {
    router.addRoute("root", app1routes());
  }
  if (i18n) {
    i18n.global.mergeLocaleMessage("en-US", messages["en-US"]);
    i18n.global.mergeLocaleMessage("pt-BR", messages["pt-BR"]);
  }
  if (mainLayoutStore) {
    const t = i18n.global.t.bind(i18n);
    const menuLinks = [
      {
        title: t("menuLinks.app1Feature1"),
        caption: t("menuLinks.app1Feature1Hint"),
        icon: "school",
        to: { name: "app1feature1" },
      },
    ];
    mainLayoutStore.addMenuLinks(menuLinks);
  }
}
