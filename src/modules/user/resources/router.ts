import Module from '@/components/Module.vue';
import Home from '../views/Home.vue';

const route = {
  path: '/user',
  component: Module,
  children: [
    {
      path: '',
      component: Home,
    },
  ],
};

export default route;
