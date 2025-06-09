import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{ path: '/', component: () => import('@/pages/Home.vue') },
	{ path: '/catalog', component: () => import('@/pages/Catalog.vue') },
	{ path: '/cart', component: () => import('@/pages/Cart.vue') },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
