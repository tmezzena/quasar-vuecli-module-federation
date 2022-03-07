<template>
  <q-page class="flex flex-center">
    <div class="row">
      <div class="col-12">
        <img
          alt="Quasar logo"
          src="../assets/logo.svg"
          style="width: 200px; height: 200px"
        />
      </div>
      <div class="col-12"><TestComp1></TestComp1></div>
      <div class="col-12">
        <q-btn color="purple" @click="showNotif" label="Show Notification" />
      </div>
    </div>
  </q-page>
</template>

<style></style>

<script>
import { defineAsyncComponent } from "vue";
import { useQuasar } from "quasar";

const TestComp1 = defineAsyncComponent(() => import("app1/TestComp1.vue"));

export default {
  name: "HelloWorld",
  components: { TestComp1 },
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
};
</script>
