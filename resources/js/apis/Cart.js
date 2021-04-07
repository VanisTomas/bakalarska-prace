import Api from './Api';

export default {
	addItem(data) {
		return Api.post('/cart', {
			product_id: data.product.id,
			quantity: data.quantity
		});
	},
	removeItem(product) {
		return Api.delete('/cart/' + product.id);
	},
	clearCart() {
		return Api.delete('/cart');
	},
	getItems() {
		return Api.get('/cart');
	},
	updateQuantity(data) {
		return Api.put('/cart', {
			product_id: data.product.id,
			quantity: data.quantity
		});
	}
};