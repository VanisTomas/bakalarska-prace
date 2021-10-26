import Cart from '../apis/Cart';

export default {
	namespaced: true,
	state: {
		cart: []
	},
	getters: {
		cart(state) {
			return state.cart;
		},
		cartItemCount(state) {
			return state.cart.length;
		},
		cartTotalPrice(state) {
			let total = 0;
			state.cart.forEach(item => {
				total += item.product.price * item.quantity;
			});
			return Math.round(total * 100) / 100;
		}
	},
	mutations: {
		SET_CART(state, data) {
			state.cart = data;
		},
		ADD_TO_CART(state, data) {
			const productInCart = state.cart.find(item => {
				return item.product.id === data.product.id;
			});
			if (productInCart) {
				productInCart.quantity += data.quantity;
			} else {
				state.cart.push(data);
			}
		},
		REMOVE_FROM_CART(state, product) {
			state.cart = state.cart.filter(item => {
				return item.product.id !== product.id;
			});
		},
		CLEAR_CART(state) {
			state.cart = [];
		},
		UPDATE_QUANTITY(state, data) {
			const product = state.cart.find(item => {
				return item.product.id === data.product.id;
			});
			product.quantity = parseInt(data.quantity);
		}
	},
	actions: {
		async addToCart({ commit, rootGetters }, data) {
			commit('ADD_TO_CART', data);
			if (rootGetters['auth/authenticated']) {
				await Cart.addItem(data);
			}
		},
		async removeFromCart({ commit, rootGetters }, product) {
			commit('REMOVE_FROM_CART', product);
			if (rootGetters['auth/authenticated']) {
				await Cart.removeItem(product);
			}
		},
		async clearCart({ commit, rootGetters }) {
			commit('CLEAR_CART');
			if (rootGetters['auth/authenticated']) {
				await Cart.clearCart();
			}
		},
		async getCartItems({ commit, rootGetters }) {
			if (rootGetters['auth/authenticated']) {
				const response = await Cart.getItems();
				commit('SET_CART', response.data);
			}
		},
		async updateQuantity({ commit, rootGetters }, data) {
			commit('UPDATE_QUANTITY', data);
			if (rootGetters['auth/authenticated']) {
				await Cart.updateQuantity(data);
			}
		}
	}
};
