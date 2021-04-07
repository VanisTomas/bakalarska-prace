import Api from './Api';

export default {
	completeOrder(data) {
		return Api.post('/orders', data);
	},
	getOrders(page) {
		return Api.get('/orders?page=' + page);
	},
	getAll(page) {
		return Api.get('/orders-admin?page=' + page);
	}
};
