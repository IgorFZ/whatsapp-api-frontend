import { createRouter, createWebHistory } from 'vue-router'
import SessionsHome from '../components/SessionsHome.vue'

const routes = [
  { path: '/', name: 'SessionsHome', component: SessionsHome },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
