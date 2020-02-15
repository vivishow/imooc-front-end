import axios from '@/utils/request'

/**
 * 获取验证码接口
 * @param {*} sid 唯一标识
 */
const getCode = (sid) => {
  return axios.get('/getCaptcha', {
    params: {
      sid: sid
    }
  })
}

/**
 * 找回密码接口
 * @param {*} option 找回密码信息(邮箱,验证码)
 */
const forget = option => {
  return axios.post('/forget', {
    ...option
  })
}

/**
 * 登录接口
 * @param {*} userInfo 用户登录信息
 */
const login = userInfo => {
  return axios.post('/login', {
    ...userInfo
  })
}

export { getCode, forget, login }
