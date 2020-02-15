import { extend, localize } from 'vee-validate'
import { required, email, min, max, length, confirmed } from 'vee-validate/dist/rules'

import zh from 'vee-validate/dist/locale/zh_CN.json'

extend('email', email)
extend('min', min)
extend('max', max)
extend('required', required)
extend('length', length)
extend('confirmed', confirmed)
extend('notAllNumbers', {
  validate: value => !/^[0-9]+$/.test(value)
})

localize('zh_CN', {
  messages: {
    ...zh.messages,
    required: '请输入{_field_}',
    confirmed: '请输入相同的{_field_}',
    notAllNumbers: '不能以纯数字作为{_field_}'

  },
  names: {
    email: '邮箱',
    password: '密码',
    name: '昵称',
    username: '账号',
    code: '验证码',
    repassword: '确认密码'
  },
  fields: {
    email: {
      email: '请输入正确的{_field_}',
      required: '请输入{_field_}!!!'
    }
  }
})
