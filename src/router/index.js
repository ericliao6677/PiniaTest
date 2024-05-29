import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('../views/PiniaTest/ProductListView.vue') },
    { path: '/cart', component: () => import('../views/PiniaTest/CartView.vue') },
    { path: '/checkout', component: () => import('../views/PiniaTest/CheckoutView.vue') }
  ]
});

export default router;
