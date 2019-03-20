import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './styles/index.scss'

import App from './App'
import store from './store'
import router from './router'

import i18n from './lang'
import './icons'
import './permission'

if (process.env.NODE_ENV === 'development') {
  require('./mock')
}

Vue.use(Element, {
  size: Cookies.get('size') || 'medium',
  i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
