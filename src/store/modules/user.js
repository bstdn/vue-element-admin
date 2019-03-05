import { loginByUsername } from '../../api/login'
import { getToken, setToken } from '../../utils/auth'

const user = {
  state: {
    token: getToken(),
    roles: [],
    name: '',
    avatar: ''
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },
  actions: {
    LoginByUsername({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        loginByUsername(username, userInfo.password).then(response => {
          if (!response.data) {
            reject('Login failed, please try again.')
          }
          const data = response.data
          commit('SET_TOKEN', data.token)
          setToken(response.data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
