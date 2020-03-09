import VueRouter, {Route} from 'vue-router'
import { ElMessage } from 'element-ui/types/message';
import { ElMessageBoxShortcutMethod } from 'element-ui/types/message-box';
declare module 'vue/types/vue' {
	interface Vue {
		$router: VueRouter
        $route: Route
        
        $message: ElMessage
        $confirm: ElMessageBoxShortcutMethod
	}
}

declare module 'vue/types/options' {
	interface ComponentOptions<V extends Vue> {
		[propsName: string]: any
		ref?: string
	}
}
