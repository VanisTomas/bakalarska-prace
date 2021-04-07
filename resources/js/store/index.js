import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import cart from './cart';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		auth,
		cart
	},
	plugins: [new VuexPersistence().plugin]
});

export default store;
