import { extend } from 'vee-validate'
import { required, email, length, min } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: '{_field_}不能为空'
})
extend('email', {
  ...email,
  message: '请输入正确的邮箱格式'
})
extend('length', {
  ...length,
  message: '{_field_}要求长度为{length}'
})
extend('min', {
  ...min,
  message: '{_field_}最小长度为{length}'
})
