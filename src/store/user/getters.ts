import { GetterTree } from 'vuex'
import { RootState } from '../types'
import { UserState } from './types'

export const getters: GetterTree<UserState, RootState> = {
	fullName(state: UserState): string {
		return ''
	},
}
