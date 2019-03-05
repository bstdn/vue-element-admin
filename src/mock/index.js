import Mock from 'mockjs'
import loginAPI from './login'

Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
Mock.XHR.prototype.send = function() {
  if (this.custom.xhr) {
    this.custom.xhr.withCredentials = this.withCredentials || false
  }
  this.proxy_send(...arguments)
}

Mock.mock(/\/login\/login/, 'post', loginAPI.loginByUsername)

export default Mock
