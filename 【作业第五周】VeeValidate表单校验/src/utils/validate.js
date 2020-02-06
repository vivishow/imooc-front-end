import { extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import { messages } from 'vee-validate/dist/locale/zh_CN'

for (let rule in rules) {
  extend(rule, {
    ...rules[rule],
    message: messages[rule]
  })
}
