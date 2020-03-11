import {Route} from 'vue-router/types/router'
import store from '@/store'
const whiteList = ['login']
// 白名单 + vuex + cookie 权限验证
class RouterGuards {
	enterVerification(to: Route, from: Route, next: any) {}
}
export default new RouterGuards()
