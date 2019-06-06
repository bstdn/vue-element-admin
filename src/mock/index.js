import Mock from 'mockjs'
import loginAPI from './login'

Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
Mock.XHR.prototype.send = function() {
  if (this.custom.xhr) {
    this.custom.xhr.withCredentials = this.withCredentials || false
  }
  this.proxy_send(...arguments)
}

Mock.mock(/\/login\/login/, 'post', loginAPI.login)
Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getUserInfo)
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout)

export default Mock
