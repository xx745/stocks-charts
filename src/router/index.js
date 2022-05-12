import { createRouter, createWebHistory } from 'vue-router';
import Dash from '../views/Dash.vue';

const routes = [
  {
    path: '/',
    name: 'dash',
    component: Dash
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
