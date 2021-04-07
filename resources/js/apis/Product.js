import Api from './Api';

export default {
	getProducts(page, filter, order_by) {
		return Api.get('/products?page=' + page, {
			params: {
				filter: filter,
				order_by: order_by
			}
		});
	},
	get(id) {
		return Api.get('/products/' + id);
	},
	add(product) {
		return Api.post('/products', product);
	},
	update(id, product) {
		product.append('_method', 'put');
		return Api.post('/products/' + id, product);
	},
	delete(id) {
		return Api.delete('/products/' + id);
	},
	getMaxPrice() {
		return Api.get('/max-price');
	}
};
