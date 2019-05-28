import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId: undefined
  },
  mutations: {
    setUserId(state, newUserId) {
      state.userId = newUserId;
    },

    logout(state) {
      state.userId = undefined;
    }
  },
  actions: {

  },
  getters: {
    userId(state) {
      return state.userId;
    }
  }
})
