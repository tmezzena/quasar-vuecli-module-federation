import { defineStore } from "pinia";

var lProcessEnv = false;
try {
  if (process.env.API_URL) {
    lProcessEnv = true;
  }
  lProcessEnv = true;
} catch {
  lProcessEnv = false;
}

export const useConfigStore = defineStore("config", {
  state: () => {
    return {};
  },
  getters: {
    API_URL: () => {
      if (lProcessEnv) {
        return process.env.API_URL;
      } else {
        return import.meta.env.VITE_API_URL;
      }
    },
    SERVER: () => {
      if (lProcessEnv) {
        return process.env.SERVER;
      } else {
        return import.meta.env.VITE_SERVER;
      }
    },
    CLIENT: () => {
      if (lProcessEnv) {
        return process.env.CLIENT;
      } else {
        return import.meta.env.VITE_CLIENT;
      }
    },
    VUE_ROUTER_MODE: () => {
      if (lProcessEnv) {
        return process.env.VUE_ROUTER_MODE;
      } else {
        return import.meta.env.VITE_VUE_ROUTER_MODE;
      }
    },
    VUE_ROUTER_BASE: () => {
      if (lProcessEnv) {
        return process.env.VUE_ROUTER_BASE;
      } else {
        return import.meta.env.VITE_VUE_ROUTER_BASE;
      }
    },
    MODE: () => {
      if (lProcessEnv) {
        return process.env.MODE;
      } else {
        return import.meta.env.VITE_MODE;
      }
    },
    DEBUGGING: () => {
      if (lProcessEnv) {
        return process.env.DEBUGGING;
      } else {
        return import.meta.env.VITE_DEBUGGING;
      }
    },
  },
});
