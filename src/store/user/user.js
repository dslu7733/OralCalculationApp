import Vue from 'vue'
import VueAxios from 'vue-axios'
import Axios from 'axios'

Vue.use(VueAxios, Axios)



const user = {
  state: {
    name: '',
    grade: []
  },
  mutations: {
    updateUser(state, payload) {
      state.name = payload.name
      state.grade = payload.grade.slice()
      let newUser = payload

      Vue.axios.get('/api/user/edit', {
          params: newUser
        })
        .then(res => {
          console.log(res)
        }, err => {
          console.log(err)
        })
    }
  }
}

export default user
