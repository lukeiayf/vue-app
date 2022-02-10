<script>
import SideMenu from '../components/SideMenu.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const login = () => {
  router.push('/dashboard');
};

export default {
  components: {
    SideMenu,
  },
};
</script>

<template>
  <SideMenu />
</template>
