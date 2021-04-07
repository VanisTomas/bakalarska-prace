import Api from './Api';
import Csrf from './Csrf';

export default {
	async login(user) {
		await Csrf.getCookie();
		return Api.post('/login', user);
	},
	logout() {
		return Api.post('/logout');
	},
	register(user) {
		return Api.post('/register', user);
	},
	update(user) {
		return Api.put('/user', user);
	},
	changePassword(data) {
		return Api.put('/password', data);
	}
};
