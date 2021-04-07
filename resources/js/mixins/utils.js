export default {
	methods: {
		validateEmail(email) {
			var re = /\S+@\S+\.\S+/;
			return re.test(email);
		},
		isObjectEmpty(object) {
			return Object.keys(object).length === 0;
		},
		parseServerErrors(errors) {
			const parsedError = {};
			for (const key in errors) {
				if (errors.hasOwnProperty(key)) {
					parsedError[key] = errors[key][0];
				}
			}
			return parsedError;
		},
		getFormData(data) {
			const formData = new FormData();
			Object.keys(data).forEach(key => {
				formData.append(key, data[key]);
			});
			return formData;
		},
		stringToKebabCase(string) {
			return string.replace(/\s+/g, '-').toLowerCase();
		},
		dateFormat(date) {
			const dateObj = new Date(date);
			const day = dateObj.getDate();
			const month = dateObj.getMonth() + 1;
			const year = dateObj.getFullYear();
			return `${day}. ${month}. ${year}`;
		}
	}
};
