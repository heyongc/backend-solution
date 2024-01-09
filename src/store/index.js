import { createStore } from 'vuex'
import app from './modules/app'
import user from './modules/user'
import getters from './getters.js'

export default createStore({
  getters,
  modules: {
    app,
    user
  }
})
