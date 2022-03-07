import { defineComponent } from "vue";
import EssentialLink from "components/EssentialLink.vue";
//import { Notify } from "quasar";
import { useStore } from "./store";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "MainLayout",
  components: {
    EssentialLink,
  },
  props: {
    rp_context: String,
  },
  setup() {
    const store = useStore();

    const {
      rightDrawerOpen,
      menuDrawerOpen,
      authenticating,
      menuLinks,
      userLinks,
      isAuthenticated,
    } = storeToRefs(store);

    return {
      store,
      rightDrawerOpen,
      menuDrawerOpen,
      authenticating,
      menuLinks,
      userLinks,
      isAuthenticated,
    };
  },
  computed: {},
  methods: {
    userButtonClick() {
      this.rightDrawerOpen = !this.rightDrawerOpen;
    },
  },
});
