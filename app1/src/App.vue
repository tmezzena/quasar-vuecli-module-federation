<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  mounted() {},
  unmounted() {},
});
</script>

<style lang="scss">
html {
  .root {
    --q-color-page-toolbar: $grey-8;
  }
}
</style>
