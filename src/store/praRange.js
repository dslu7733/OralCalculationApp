import Vue from 'vue'
import VueAxios from 'vue-axios'
import Axios from 'axios'

Vue.use(VueAxios, Axios)

const praRange = {
  state: {
    grade: [],
    praRange: [],
    pratice: ''
  },
  mutations: {
    getPraRangeAPI(state, payload) {
      //console.log(payload)
      Vue.axios.get('/api/pratice/range', {
          params: payload
        })
        .then(res => {
          state.praRange = res.data
          state.grade = payload.grade
          //console.log(state.praRange)
        }, err => {
          console.log('err' + err)
        })
    }
  },
  actions: {
    getPraRange(context, payload) {
      context.commit('getPraRangeAPI', payload)
    }
  }
}

export default praRange
