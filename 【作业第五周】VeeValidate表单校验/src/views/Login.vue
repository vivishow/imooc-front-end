<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li class="layui-this">登入</li>
          <li>
            <router-link to="reg">注册</router-link>
          </li>
        </ul>
        <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;">
          <div class="layui-tab-item layui-show">
            <div class="layui-form layui-form-pane">
              <form method="post">
                <div class="layui-form-item">
                  <label for="L_email" class="layui-form-label">用户名</label>
                  <ValidationProvider name="用户名" rules="required|email" v-slot="{ errors }">
                    <div class="layui-input-inline">
                      <input
                        type="text"
                        name="username"
                        v-model="username"
                        placeholder="请输入您的用户名"
                        autocomplete="off"
                        class="layui-input"
                      />
                    </div>
                    <div class="error layui-form-mid">{{ errors[0] }}</div>
                  </ValidationProvider>
                </div>
                <div class="layui-form-item">
                  <label for="L_pass" class="layui-form-label">密码</label>
                  <ValidationProvider name="密码" rules="required|min:6" v-slot="{ errors }">
                    <div class="layui-input-inline">
                      <input
                        type="password"
                        name="password"
                        v-model="password"
                        placeholder="请输入密码"
                        autocomplete="off"
                        class="layui-input"
                      />
                    </div>
                    <div class="error layui-form-mid">{{ errors[0] }}</div>
                  </ValidationProvider>
                </div>
                <div class="layui-form-item">
                  <label for="L_vercode" class="layui-form-label">验证码</label>
                  <ValidationProvider name="验证码" rules="required|length:4" v-slot="{ errors }">
                    <div class="layui-input-inline">
                      <input
                        type="text"
                        name="code"
                        v-model="code"
                        placeholder="请输入验证码"
                        autocomplete="off"
                        class="layui-input"
                      />
                    </div>
                    <div class="layui-form-mid svg">
                      <span v-html="svg" @click="_getCode"></span>
                    </div>
                    <div class="error layui-form-mid">{{ errors[0] }}</div>
                  </ValidationProvider>
                </div>
                <div class="layui-form-item">
                  <button class="layui-btn">立即登录</button>
                  <span style="padding-left:20px;">
                    <router-link to="forget">忘记密码？</router-link>
                  </span>
                </div>
                <div class="layui-form-item fly-form-app">
                  <span>或者使用社交账号登入</span>
                  <a
                    href
                    onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})"
                    class="iconfont icon-qq"
                    title="QQ登入"
                  ></a>
                  <a
                    href
                    onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})"
                    class="iconfont icon-weibo"
                    title="微博登入"
                  ></a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import '@/utils/validate'
import { getCode } from '@/api/login'

export default {
  name: 'login',
  components: {
    ValidationProvider
  },
  data () {
    return {
      username: '',
      password: '',
      code: '',
      svg: ''
    }
  },
  mounted () {
    this._getCode()
  },
  methods: {
    _getCode () {
      getCode().then(res => {
        if (res.code === 200) {
          this.svg = res.data
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.error {
  color: red;
}
.svg {
  padding: 0;
  position: relative;
  top: -10px;
}
</style>
