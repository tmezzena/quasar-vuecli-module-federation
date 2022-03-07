import useRouter, { router } from "boot/router";
import usePinia, { pinia } from "boot/pinia";
import useBooti18n, { i18n } from "boot/i18n";
import { useStore as useMainLayoutStore } from "src/layouts/main/store";

const mainLayoutStore = useMainLayoutStore(pinia);

export default ({ app }) => {
  useRouter({ app });

  usePinia({ app });

  useBooti18n({ app });
};

export { router, pinia, i18n, mainLayoutStore };
