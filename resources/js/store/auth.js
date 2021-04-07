export default {
	namespaced: true,
	state: {
		authenticated: false,
		user: null
	},
	getters: {
		authenticated(state) {
			return state.authenticated;
		},
		admin(state) {
			return state.authenticated && state.user && state.user.role === 'admin' ? true : false;
		},
		user(state) {
			return state.user;
		}
	},
	mutations: {
		SET_AUTHENTICATED(state, value) {
			state.authenticated = value;
		},
		SET_USER(state, value) {
			state.user = value;
		}
	},
	actions: {
		login({ commit, dispatch }, user) {
			commit('SET_AUTHENTICATED', true);
			commit('SET_USER', user);
			dispatch('cart/getCartItems', null, { root: true });
		},
		logout({ commit }) {
			commit('SET_AUTHENTICATED', false);
			commit('SET_USER', null);
			commit('cart/CLEAR_CART', null, { root: true });
		},
		updateUser({ commit }, user) {
			commit('SET_USER', user);
		}
	}
};
