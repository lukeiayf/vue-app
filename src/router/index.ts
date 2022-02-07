import { createRouter, createWebHashHistory } from 'vue-router';

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

import modules from '../composables/modules';

Object.values(modules).forEach((module: any) => {
  router.addRoute(module.router);
});

export default router;
