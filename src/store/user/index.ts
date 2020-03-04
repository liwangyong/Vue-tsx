import {Module} from 'vuex'
import {getters} from './getters'
import {actions} from './actions'
import {mutations} from './mutations'
import {RootState} from './types'

export const state: RootState = {
	version: '',
}
const namespaced: boolean = true
export const user: Module<RootState, any> = {
	namespaced,
	state,
	getters,
	actions,
	mutations,
}
