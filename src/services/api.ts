import axios from 'axios'


const urlMap = new Map([
	['/api', '/'],
	['/ocrApi', '/'],
]);
// 请求拦截器
axios.interceptors.request.use(config => {
	// 添加请求头
	config.headers.Authorization = localStorage.getItem('token') || ''
	if (process.env.NODE_ENV === 'production') {
		const { url } = config;

		urlMap.forEach((ip, prefix) => {
			if (url?.startsWith(prefix)) {
				config.url = url.replace(prefix, ip);
			}
		});
	}
	return config
}, error => {
	return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(response => {
	return response
})
