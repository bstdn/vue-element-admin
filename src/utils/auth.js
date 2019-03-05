import Cookies from 'js-cookie'

const TokenKey = 'vue_element_admin_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}
