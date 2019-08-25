import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const myStore = new Vuex.Store({
  state: {
    // 请求token
    token: ''
  },
  getters: {
    // 获取token
    getToken: state => {
      return state.token
    }
  },
  mutations: {
    setToken: (state, str) => {
      state.token = str
    }
  },
  actions: {
    setToken: (state, str) => {
      state.commit('setToken', str)
    }
  }
})

export {myStore}
