import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue/dist/antd'
import axios from 'axios'
import "./axios"

import 'ant-design-vue/dist/antd.css'

Vue.use(Antd)
Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
}).$mount('#app')