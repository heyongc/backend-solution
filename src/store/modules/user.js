import { login, getUserInfo } from '@/api/sys'
import md5 from 'md5'
import { setItem, getItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
import router from '@/router'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    login(context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        })
          .then((data) => {
            console.log('【actions-login】', data)
            this.commit('user/setToken', data.token)
            // 登录后操作
            router.push('/')
            resolve(data)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    async getUserInfo() {
      const res = await getUserInfo()
      this.commit('user/setUserInfo', res)
      return res
    }
  }
}
