import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Login from '../pages/login.vue';
import Register from '../pages/register.vue';

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: Favorites,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/item-info',
    name: 'item-info',
    component: Item-info,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;