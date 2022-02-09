<template>
  {{ store.state.nome }}
  <aside-menu />
</template>

<script lang="ts">
import { inject } from 'vue';

export default {
  setup() {
    const store = inject('store');
    return {
      store,
    };
  },
};
</script>
