import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Login from '../pages/login.vue';
// import Register from '../pages/register.vue';
import TheLogin from '../components/TheLogin.vue';
import Register from '../components/TheRegister.vue';

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
  {
    path: '/login',
    name: 'login',
    component: TheLogin,
  },
  {
    path: '/register',
    name: 'register',
    component: TheRegister,
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
    component: ItemInfo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;