import request from '@/utils/request'

/**
 * 登录
 * return promise
 */
export const login = (data) => {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

/**
 * 获取用户信息
 */
export const getUserInfo = () => {
  return request({
    url: '/sys/profile'
  })
}

/**
 * 初始化
 * return promise
 */
export const init = (data) => {
  return request({
    url: '/sys/init',
    method: 'GET',
    data
  })
}
