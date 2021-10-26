import Api from './Api';

export default {
	createOrder(data) {
		return Api.post('/orders', data);
	},
	get(hash) {
		return Api.get('/orders/' + hash);
	},
	getOrders(page) {
		return Api.get('/orders?page=' + page);
	},
	getAll(page) {
		return Api.get('/orders-admin?page=' + page);
	},
	cancelOrder(id) {
		return Api.delete('/orders/' + id);
	}
};
