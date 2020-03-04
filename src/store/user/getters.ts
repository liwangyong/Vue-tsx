import {GetterTree} from 'vuex'
import {RootState} from './types'

export const getters: GetterTree<RootState, any> = {
	fullName(state: RootState): string {
		return ''
	},
}
