import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
	routes,
	mode: 'history'
});

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAdmin)) {
		if (!admin()) {
			if (authenticated()) {
				next('/profile');
			} else {
				next('/login');
			}
		} else {
			next();
		}
	} else if (to.matched.some(record => record.meta.requiresAuth)) {
		if (!authenticated()) {
			next('/login');
		} else {
			next();
		}
	} else if (to.matched.some(record => record.meta.requiresGuest)) {
		if (authenticated()) {
			next('/profile');
		} else {
			next();
		}
	} else {
		next();
	}
});

export default router;

function authenticated() {
	return store.getters['auth/authenticated'];
}

function admin() {
	return store.getters['auth/admin'];
}
