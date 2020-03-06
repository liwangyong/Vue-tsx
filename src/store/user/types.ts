import {ModuleTree, MutationTree, ActionTree, GetterTree} from 'vuex'
// state类型及请求参数申明
export interface Module<S, R> {
	namespaced?: boolean
	state?: S | (() => S)
	getters?: GetterTree<S, R>
	actions?: ActionTree<S, R>
	mutations?: MutationTree<S>
	modules?: ModuleTree<R>
}
// types.ts
export interface UserState {
	userId: string
}
