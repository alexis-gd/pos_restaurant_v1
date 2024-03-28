import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/landing/LandingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView
    },
    {
      path: '/auth/login',
      name: 'login',
      component: () => import('@/views/auth/LoginView.vue')
    },
    {
      path: '/dashboard/home',
      name: 'home',
      component: () => import('@/views/dashboard/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: "/:catchAll(.*)",
      name: 'about',
      component: () => import('@/views/NotFound.vue')
    }
  ]
})

export default router
