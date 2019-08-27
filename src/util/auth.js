import Cookies from 'js-cookie'

// 设置token
export function setToken (token) {
  Cookies.set('token', token)
}

// 获取token数据
export function getToken () {
  return Cookies.get('token')
}
