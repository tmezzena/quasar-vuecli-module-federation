<template>
  <q-page id="page-home" class="flex flex-center">
    <div class="row">
      <div class="col-12"><span v-text="$t('app1Feature1.test')"></span></div>
      <div class="col-12"><span v-text="$t('locale.locale')"></span></div>
      <div class="col-12">
        <q-btn color="purple" @click="showNotif" label="Show Notification" />
      </div>
    </div>
  </q-page>
</template>

<script src="./index.js"></script>
<style src="./index.scss" lang="scss"></style>
