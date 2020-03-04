import {ModuleTree, MutationTree, ActionTree, GetterTree} from 'vuex'

export interface Module<S, R> {
	namespaced?: boolean
	state?: S | (() => S)
	getters?: GetterTree<S, R>
	actions?: ActionTree<S, R>
	mutations?: MutationTree<S>
	modules?: ModuleTree<R>
}
// types.ts
export interface RootState {
	version: string
}
