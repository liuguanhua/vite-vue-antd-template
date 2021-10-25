import { Module } from 'vuex'

import { INIT_MAIN_BG_COLOR, replaceObjState } from '@/utils'

interface IState {
  mainBgColor: string
}

const global: Module<IState, unknown> = {
  state: {
    mainBgColor: INIT_MAIN_BG_COLOR,
  },
  mutations: {
    updateState(state, payload) {
      replaceObjState(state, payload)
    },
  },
  actions: {
    async asyncUpdateState({ commit }, { payload }) {
      commit('updateState', payload)
    },
  },
}

export default global
