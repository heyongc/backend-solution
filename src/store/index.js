import { createStore } from 'vuex'
import app from './modules/app'
import user from './modules/user'
import theme from './modules/theme'
import permission from './modules/permission'
import getters from './getters'

export default createStore({
  getters,
  modules: {
    app,
    user,
    theme,
    permission
  }
})
