import {MutationTree} from 'vuex'
import {RootState} from './types'
import {profileLoaded} from '../mutations-type'

export const mutations: MutationTree<RootState> = {
	[profileLoaded]<T>(state: RootState, payload: T) {
		console.log(4444)
	},
}
