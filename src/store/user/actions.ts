import { ActionTree } from 'vuex'
import axios from 'axios'
import { RootState } from '../types'
import { UserState } from './types'

export const actions: ActionTree<UserState, RootState> = {
	fetchData({ commit }): any {
		// axios({
		// 	url: 'https://....',
		// }).then(
		// 	response => {
		// 		const payload: User = response && response.data
		// 		commit('profileLoaded', payload)
		// 	},
		// 	error => {
		// 		console.log(error)
		// 		commit('profileError')
		// 	},
		// )
	},
}
