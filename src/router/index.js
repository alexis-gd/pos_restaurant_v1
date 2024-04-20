import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/userStore'
// import LandingView from '../views/landing/LandingView.vue'

const routes = [
  {
    path: '/',
    name: 'landing',
    component: () => import('@/views/auth/LoginView.vue')
    // component: LandingView
  },
  {
    path: '/auth/login',
    name: 'login',
    component: () => import('@/views/auth/LoginView.vue')
  },
  {
    path: '/dashboard/home',
    name: 'home',
    component: () => import('@/views/dashboard/HomeView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/dashboard/orders',
    name: 'orders',
    component: () => import('@/views/dashboard/OrdersView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/dashboard/tables',
    name: 'tables',
    component: () => import('@/views/dashboard/TablesView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/dashboard/products',
    name: 'products',
    component: () => import('@/views/dashboard/ProductsView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/dashboard/profile',
    name: 'profile',
    component: () => import('@/views/dashboard/ProfileView.vue'),
    meta: { requiresAuth: true }
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
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore(); // Obtén la tienda de usuario
  userStore.fill(); // Espera a que se complete el llenado de la tienda

  if (to.meta.requiresAuth && !userStore.isAuthenticated) {
    // Si la ruta requiere autenticación y el usuario no está autenticado, redirige al inicio de sesión
    next('/auth/login');
  } else {
    // De lo contrario, permite el acceso a la ruta
    next();
  }
});


export default router
