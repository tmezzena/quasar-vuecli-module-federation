<template>
  <q-layout id="layout-main" view="hHr lpR fFf">
    <q-header reveal elevated class="layout-main-header bg-grey-9">
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="menu"
          aria-label="Menu"
          v-if="isAuthenticated"
          @click="menuDrawerOpen = !menuDrawerOpen"
        >
        </q-btn>
        <q-toolbar-title
          ><div class="row q-gutter-xs">
            <div class="self-end">Velox</div>
            <div class="self-end text-caption">&nbsp;Portal do Exibidor</div>
          </div></q-toolbar-title
        >
        <q-btn
          :flat="isAuthenticated"
          :outline="!isAuthenticated"
          :stack="!$q.screen.gt.xs"
          no-caps
          :loading="authenticating"
          @click="userButtonClick"
        >
          <q-avatar size="26px" v-if="isAuthenticated">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div
            class="q-pl-sm"
            :class="isAuthenticated ? '' : 'highlight-link'"
            v-text="isAuthenticated ? 'Olá, Marco' : 'Fazer Login'"
          ></div>
          <q-tooltip v-if="isAuthenticated">Minha Conta</q-tooltip>
          <template v-slot:loading>
            <q-spinner-hourglass class="on-left" />
            <span v-text="'Entrando...'" />
          </template>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="menuDrawerOpen" side="left" bordered>
      <q-list>
        <q-item-label header> Menu </q-item-label>
        <EssentialLink v-for="link in menuLinks" :key="link.id" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-drawer
      v-model="rightDrawerOpen"
      side="right"
      overlay
      behavior="mobile"
      bordered
    >
      <q-list>
        <q-item-label header> Minha Conta </q-item-label>
        <EssentialLink v-for="link in userLinks" :key="link.id" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script src="./index.js"></script>
<style src="./index.scss" lang="scss"></style>
