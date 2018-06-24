import Vue from 'vue'
import Vuex from 'vuex'

import TaskModule from '@/store_modules/TaskModule'
import LoginModule from '@/store_modules/LoginModule'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    TaskModule,
    LoginModule
  }
})

export default store
