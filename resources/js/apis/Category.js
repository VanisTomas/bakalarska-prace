import Api from './Api';

export default {
	getAll() {
		return Api.get('/categories');
	},
	add(category) {
		return Api.post('/categories', category);
	},
	update(id, category) {
		return Api.put('/categories/' + id, category);
	},
	delete(id) {
		return Api.delete('/categories/' + id);
	}
};
