<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import menu from './definitions/menu.js';
import AsideMenu from './components/AsideMenu.vue';
</script>

<template>
  <!-- <aside-menu :menu="menu" /> -->
  <router-view />
</template>
