import {
 getUserInfo
} from '@/service/common'

const state = {
    navList: []
}

const mutations = {
    setNavList(state, params = []) {
        state.navList = params
    }
}
const actions ={
    getNavList({commit, state}, params) {
        return getUserInfo().then(res => {
            commit('setNavList', res)
        })
    }
}

export default {
	state,
    mutations,
    actions,
}
