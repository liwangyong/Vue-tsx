import axios, {AxiosResponse, AxiosRequestConfig, AxiosError} from 'axios'
// import {Message} from 'element-ui'

const baseURL = process.env.VUE_APP_DATA_URL
class HttpRequest {
	instance: any
	constructor() {
		this.instance = axios.create()
		this.interceptors(this.instance)
	}
	getInsideConfig() {
		const config = {
			baseURL,
			headers: {},
		}
		return config
	}
	interceptors(instance: any) {
		// 请求拦截
		instance.interceptors.request.use(
			(config: AxiosRequestConfig) => {
				// 添加全局的loading...
				return config
			},
			(error: any) => {
				return Promise.reject(error)
			},
		)
		// 响应拦截
		instance.interceptors.response.use(
			(res: AxiosResponse) => {
				const {data, status} = res
				return {data, status}
			},
			(error: AxiosError) => {
				if (error && error.request) {
					const status = error.request.status
					// switch (status) {
					// 	case 401:
					// 		Message({message: '接口配置未经授权！', type: 'error', duration: 3000})
					// 		break
					// 	case 404:
					// 		Message({message: '服务端接口未找到！', type: 'error', duration: 3000})
					// 		break
					// 	case 415:
					// 		Message({message: 'HTTP协议不匹配，请确认！', type: 'error', duration: 3000})
					// 		break
					// 	case 500:
					// 		Message({message: '服务器未启动！', type: 'error', duration: 3000})
					// 		break
					// 	default:
					// 		Message({message: '未知错误！', type: 'error', duration: 3000})
					// 		break
					// }
				}
				return Promise.reject(error)
			},
		)
	}
	async request(options: AxiosRequestConfig) {
		const option = Object.assign(this.getInsideConfig(), options)
		return this.instance(option)
	}
}

const $axios = new HttpRequest()

export default $axios as any
