import { defineComponent } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "App1Feature1Page",
  components: {},
  setup() {
    const $q = useQuasar();

    return {
      showNotif() {
        $q.notify({
          message: "Jim pinged you.",
          color: "purple",
        });
      },
    };
  },
});
