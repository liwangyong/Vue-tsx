import { MutationTree } from 'vuex'
import { UserState } from './types'
import { profileLoaded } from '../mutations-type'

export const mutations: MutationTree<UserState> = {
	[profileLoaded]<T>(state: UserState, payload: T) {
		console.log(4444)
	},
}
