import Vue from 'vue'
import VueRouter, {Route} from 'vue-router'

declare module 'vue/types/vue' {
	interface Vue {
		$router: VueRouter
		$route: Route
		// 本地国际化映射配置
	}
}

declare module 'vue/types/options' {
	interface ComponentOptions<V extends Vue> {
		[propsName: string]: any
		ref?: string
	}
}
