import { defineStore } from "pinia";
import { i18n } from "boot/i18n";
import { useRouter } from "vue-router";

import { useAppStore } from "src/pinia/app";
import { ref, computed } from "vue";

export const useStore = defineStore("layout-main", {
  state: () => {
    const t = i18n.global.t.bind(i18n);
    const $router = useRouter();

    const appStore = useAppStore();
    const appIsDark = computed(() => {
      return appStore.dark;
    });

    const rightDrawerOpen = ref(false);
    const menuDrawerOpen = ref(false);
    const isAuthenticated = ref(true);

    const closeMenu = () => {
      menuDrawerOpen.value = false;
    };
    const logout = () => {
      rightDrawerOpen.value = false;

      $router.push("/home");
    };

    const menuLinks = [
      {
        id: 1,
        title: t("menuLinks.home"),
        caption: t("menuLinks.homeHint"),
        icon: "home",
        action: closeMenu,
        to: { name: "home" },
      },
    ];
    const userLinks = [
      {
        id: 1,
        title: t("userLinks.manage"),
        caption: t("userLinks.manageHint"),
        icon: "school",
        link: "https://quasar.dev",
      },
      {
        id: 2,
        type: "toggle",
        title: t("userLinks.darkMode"),
        caption: t("userLinks.darkModeHint"),
        icon: "school",
        toggleGet: appIsDark,
        toggleSet: appStore.setDark,
      },
      {
        id: 3,
        title: t("userLinks.logout"),
        caption: t("userLinks.logoutHint"),
        icon: "school",
        action: logout,
      },
    ];

    return {
      rightDrawerOpen,
      menuDrawerOpen,
      authenticating: false,
      pageTitle: "",
      menuLinks,
      userLinks,
      isAuthenticated,
      closeMenu,
    };
  },
  actions: {
    setPageTitle(pageTitle) {
      this.pageTitle = pageTitle;
    },
    addMenuLinks(menus) {
      const lastMenuLink = this.menuLinks.slice(-1)[0];
      menus.forEach((menu) => {
        this.menuLinks.push({
          ...menu,
          id: lastMenuLink.id + 1,
          action: this.closeMenu,
        });
      });
    },
  },
});
