import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {getToken, setToken} from '@/util/auth'

Vue.use(VueAxios, axios)

axios.defaults.baseURL = 'http://localhost:8080/'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.timeout = 60000

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  if (getToken()) {
    config.headers['token'] = getToken()
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  console.log('response.request.url=', response)
  // 对响应数据做点什么
  if (response.status === 200 && response.data.code === 0) {
    if (response.data && response.data.data && response.data.data.token) {
      setToken(response.data.data.token)
    }
  }
  response.data = response.data.data
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export {axios}
