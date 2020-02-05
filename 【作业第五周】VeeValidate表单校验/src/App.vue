<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane" action>
        <div class="layui-form-item">
          <label class="layui-form-label">邮箱</label>
          <ValidationProvider name="邮箱" rules="required|email" v-slot="{ errors }">
            <div class="layui-input-inline">
              <input
                v-model="name"
                type="text"
                name="title"
                placeholder="请输入邮箱"
                autocomplete="off"
                class="layui-input"
              />
            </div>
            <div class="error layui-form-mid">{{ errors[0] }}</div>
          </ValidationProvider>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <ValidationProvider name="密码" rules="required|min:6" v-slot="{ errors }">
            <div class="layui-input-inline">
              <input
                v-model="password"
                type="password"
                name="password"
                placeholder="请输入密码"
                autocomplete="off"
                class="layui-input"
              />
            </div>
            <div class="error layui-form-mid">{{ errors[0] }}</div>
          </ValidationProvider>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <ValidationProvider name="验证码" rules="required|length:4" v-slot="{ errors }">
            <div class="layui-input-inline">
              <input
                v-model="code"
                type="text"
                name="code"
                placeholder="请输入验证码"
                autocomplete="off"
                class="layui-input"
              />
            </div>
            <div class="layui-form-mid svg" @click="getCaptcha" v-html="svg"></div>
            <div class="error layui-form-mid">{{ errors[0] }}</div>
          </ValidationProvider>
        </div>
        <button class="layui-btn" @click="checkForm()">点击登录</button>
        <a href="#" class="imooc-link">忘记密码</a>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ValidationProvider } from 'vee-validate'
// import { required } from 'vee-validate/dist/rules'

// extend('required', required)

export default {
  name: 'app',
  components: {
    ValidationProvider
  },
  data () {
    return {
      svg: '',
      name: '',
      password: '',
      code: '',
      errMsg: []
    }
  },
  mounted () {
    this.getCaptcha()
  },
  methods: {
    getCaptcha () {
      axios.get('http://localhost:3000/getCaptcha').then(res => {
        if (res.status === 200) {
          let obj = res.data
          if (obj.code === 200) {
            this.svg = obj.data
          }
        }
      })
    },
    checkForm () {
      if (!this.name) {
        this.errMsg.push('用户名不得为空')
      }
      if (!this.password) {
        this.errMsg.push('密码不得为空')
      }
      if (!this.code) {
        this.errMsg.push('验证码不得为空')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  background: #f2f2f2;
}

.layui-container {
  background: #fff;
}

input {
  width: 190px;
}

.imooc-link {
  margin-left: 10px;
  &:hover {
    color: #009688;
  }
}

.svg {
  position: relative;
  top: -15px;
}

.error {
  color: red;
}
</style>
