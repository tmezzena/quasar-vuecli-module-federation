<template>
  <div>
    asasfafa
    <TestComp2></TestComp2>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TestComp2 from "@/components/TestComp2.vue";

export default defineComponent({
  name: "TestComp1",
  components: {
    TestComp2,
  },
});
</script>
