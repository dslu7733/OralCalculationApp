import Vue from 'vue'
import Vuex from 'vuex'

import user from './user/user'
import praRange from './praRange'
import tabBarCol from './mainTabBarCol'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    praRange,
    tabBarCol
  }
})
