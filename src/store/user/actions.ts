import $axios from '@/until/api'
import {ActionTree} from 'vuex'
import {RootState} from '../types'
import {UserState} from './types'

export const actions: ActionTree<UserState, RootState> = {
	fetchData({commit}): any {
		$axios.request({
			url: 'http://tingapi.ting.baidu.com/v1/restserver/ting',
			data: {
				from: 'android',
				version: '5.6.5.0',
				method: 'baidu.ting.artist.getSongList',
				format: 'json',
				order: 2,
				tinguid: 7994,
				artistid: 7994,
				offset: 0,
				limits: 50,
			},
			method: 'get',
		})
	},
}
