import { defineStore } from "pinia";
import { Dark, setCssVar } from "quasar";

export const useAppStore = defineStore("app", {
  state: () => {
    return {
      localeOs: "",
      localeUser: "",
      dark: undefined,
    };
  },
  actions: {
    setDark(value) {
      if (this.dark !== value) {
        this.dark = value;
      }
      if (Dark.isActive !== value) {
        Dark.set(value);
      }
      setCssVar("pagetoolbar", value ? "#616161" : "#f5f5f5");
      setCssVar("menuactive", value ? "#515151" : "#f5f5f5");
    },
    setLocaleOS(value) {
      this.localeOS = value;
    },
  },
  getters: {
    isDark() {
      return this.dark;
    },
    locale() {
      return this.localeUser || this.localeOs;
    },
  },
});
