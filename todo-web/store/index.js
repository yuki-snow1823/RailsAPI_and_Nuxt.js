import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
 state: {
   currentUser: {}, //　修正
   loading: false,
   notification: {
     status: false,
     message: ""
   }
 },
    mutations: {
      setUser(state, payload) {
        state.currentUser = payload
      },
      setLoading(state, payload) {
        state.loading = payload
      },
      setNotice(state, payload) { //追加
        state.notification = payload
      }
    },
    actions: {}
  })
}

export default store
