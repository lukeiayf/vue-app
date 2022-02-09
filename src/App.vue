<template>
  <router-view />
</template>

<script lang="ts">
import { provide } from 'vue';
import store from './store';

export default {
  setup() {
    provide('store', store);
  },
};
</script>
