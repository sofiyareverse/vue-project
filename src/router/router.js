import {createRouter, createWebHistory} from 'vue-router';
import Main from '@/pages/Main.vue';
import UsersPage from '@/pages/UsersPage.vue';
import UserPage from '@/pages/UserPage.vue';

const routes = [
  {
    path: '/',
    component: Main
  },
  { 
    path: '/users',
    component: UsersPage
  },
  {
    path: '/users/:id',
    component: UserPage
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router;
