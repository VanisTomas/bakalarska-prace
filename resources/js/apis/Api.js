import axios from 'axios';
import router from '../router';
import store from '../store';
import Vue from 'vue';
import config from '../config';

const Api = axios.create({
	baseURL: config.api_base_url
});

Api.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		switch (error.response.status) {
			case 401:
			case 419:
			case 503:
				store.dispatch('auth/logout');
				Vue.toasted.error('Session has expired. You have been logged out.');
				router.push('/login');
				break;
			case 500:
				alert('Internal Server Error');
				break;
			default:
				return Promise.reject(error);
		}
	});

export default Api;
