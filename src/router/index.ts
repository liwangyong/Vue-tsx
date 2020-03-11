import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import RouterGuards from '@/guard/router-guard'
Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		component: () => import(/* webpackChunkName: "about" */ '../views/About'),
	},
]

const router = new VueRouter({
	mode: 'history',
	// base: "/",
	routes,
})
router.beforeEach((to, from, next) => RouterGuards.enterVerification(to, from, next))
export default router
