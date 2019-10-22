import Vue from 'vue'
import VueAxios from 'vue-axios'
import Axios from 'axios'

Vue.use(VueAxios, Axios)



const user = {
  state: {
    name: '',
    grade: [],
    errorRecord: [],
    num: 0, //错题数目
    history: [], //time, date, accuracy, problem,grade
    eachPratice: {}
  },
  mutations: {
    updateUser(state, payload) {
      state.name = payload.name
      if (payload.grade !== [])
        state.grade = payload.grade.slice()
      state.errorRecord = payload.errorRecord

      Vue.axios.post('/api/user/edit', payload)
        .then(response => {

          if (response.data != '') {
            state.errorRecord = response.data
            state.num = state.errorRecord.length
          }

          //console.log(state.errorRecord)
        }, err => {
          console.log(err)
        })
    }
  }
}

export default user
