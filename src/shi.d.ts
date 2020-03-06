import VueRouter, {Route} from 'vue-router'
declare module 'vue/types/vue' {
	interface Vue {
		$router: VueRouter
		$route: Route
	}
}

declare module 'vue/types/options' {
	interface ComponentOptions<V extends Vue> {
		[propsName: string]: any
		ref?: string
	}
}
declare module '*.scss' {
	const scss: any
	export default scss
}
