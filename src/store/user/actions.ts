import {ActionTree} from 'vuex'
import {RootState} from '../types'
import {UserState} from './types'
import FleetApi from '@/http/fleetApi'

export const actions: ActionTree<UserState, RootState> = {
	fetchData({commit}) {
		return new Promise((resolve, reject) => {
			FleetApi.get('/customer/shopping-cart', {})
				.then(res => resolve(res))
				.catch(err => reject(err))
		})
	},
}
