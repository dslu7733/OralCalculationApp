import Vue from 'vue'
import Vuex from 'vuex'

import user from './user/user'
import praRange from './praRange'
import tabBarCol from './mainTabBarCol'
import praStart from './praStart'
import errorBook from './error_book'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    praRange,
    tabBarCol,
    praStart,
    errorBook
  }
})
