import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { user } from './user/index'
import { RootState } from './types';
Vue.use(Vuex)
const store: StoreOptions<RootState> = {
    state: {
        version: "1.0.0",
        // TODO: 这里要修改
    },
    modules: {
        user
    }
};
export default new Vuex.Store<RootState>(store);
