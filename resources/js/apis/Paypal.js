import Api from './Api';

export default {
	createOrder(data) {
		return Api.post('/paypal/create', data);
	},
	captureOrder(data) {
		return Api.post('/paypal/capture', data);
	}
};
