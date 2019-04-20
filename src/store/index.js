import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'

import auth from './modules/auth'
import events from './modules/events'
import menu from '../router/menu'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  actions,
  getters,
  modules: {
    // app,
    events,
    menu,
    auth
  },
  state: {
    // pkg
  },
  mutations: {}
})
