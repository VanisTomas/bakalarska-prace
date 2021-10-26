export const routes = [
	{
		name: 'home',
		path: '/',
		component: () => import('../views/Home')
	},
	{
		name: 'register',
		path: '/register',
		component: () => import('../views/Register'),
		meta: {
			requiresGuest: true
		}
	},
	{
		name: 'login',
		path: '/login',
		component: () => import('../views/Login'),
		meta: {
			requiresGuest: true
		}
	},
	{
		name: 'profile',
		path: '/profile',
		component: () => import('../views/Profile'),
		meta: {
			requiresAuth: true
		}
	},
	{
		name: 'profile-edit',
		path: '/profile/edit',
		component: () => import('../views/ProfileEdit'),
		meta: {
			requiresAuth: true
		}
	},
	{
		name: 'profile-password',
		path: '/profile/password',
		component: () => import('../views/ChangePassword'),
		meta: {
			requiresAuth: true
		}
	},
	{
		name: 'shop',
		path: '/shop',
		component: () => import('../views/Shop'),
	},
	{
		name: 'product',
		path: '/product/:id',
		component: () => import('../views/Product'),
		props: true
	},
	{
		name: 'admin',
		path: '/admin',
		component: () => import('../views/Admin'),
		meta: {
			requiresAdmin: true
		}
	},
	{
		name: 'admin-product',
		path: '/admin/product/:id?',
		component: () => import('../views/admin/Product'),
		meta: {
			requiresAdmin: true
		}
	},
	{
		name: 'admin-category',
		path: '/admin/category',
		component: () => import('../views/admin/Category'),
		meta: {
			requiresAdmin: true
		}
	},
	{
		name: 'admin-orders',
		path: '/admin/orders',
		component: () => import('../views/admin/Orders'),
		meta: {
			requiresAdmin: true
		}
	},
	{
		name: 'cart',
		path: '/cart',
		component: () => import('../views/Cart')
	},
	{
		name: 'orders',
		path: '/orders',
		component: () => import('../views/Orders')
	},
	{
		name: 'order',
		path: '/order/:hash',
		component: () => import('../views/Order'),
		props: true
	},
	{
		name: 'page-not-found',
		path: '*',
		component: () => import('../views/PageNotFound')
	}
];
