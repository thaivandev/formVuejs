/* eslint-disable import/prefer-default-export */
import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

import form from './modules/form'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    dataForm: form
  }
})
