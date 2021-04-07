require('./bootstrap');

import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
import Input from './components/Input';
import Utils from './mixins/utils';
import Loader from './components/Loader';
import Modal from './components/Modal';
import Toasted from 'vue-toasted';
import Pagination from 'laravel-vue-pagination';

Vue.use(Toasted, { position: 'bottom-center', duration: 7000, keepOnHover: true });

Vue.mixin(Utils);

Vue.component('app-input', Input);
Vue.component('loader', Loader);
Vue.component('modal', Modal);
Vue.component('pagination', Pagination);

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
});
