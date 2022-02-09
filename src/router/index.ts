import { createRouter, createWebHashHistory } from 'vue-router';
import modules from '../composables/modules';

import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
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
