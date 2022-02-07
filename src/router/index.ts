import { createRouter, createWebHashHistory } from 'vue-router';
import modules from '../composables/modules';

import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

Object.values(modules).forEach((module: any) => {
  router.addRoute(module.router);
});

export default router;
