<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li>
            <router-link to="login">登入</router-link>
          </li>
          <li class="layui-this">注册</li>
        </ul>
        <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;">
          <div class="layui-tab-item layui-show">
            <div class="layui-form layui-form-pane">
              <form method="post">
                <div class="layui-form-item">
                  <label for="L_email" class="layui-form-label">用户名</label>
                  <validation-provider name="用户名" rules="required|email" v-slot="{errors}">
                    <div class="layui-input-inline">
                      <input
                        type="text"
                        name="username"
                        placeholder="请输入用户名"
                        v-model="username"
                        autocomplete="off"
                        class="layui-input"
                      />
                    </div>
                    <div class="layui-form-mid layui-word-aux">将会成为您唯一的登入名</div>
                    <div class="layui-form-mid error">{{errors[0]}}</div>
                  </validation-provider>
                </div>
                <div class="layui-form-item">
                  <label for="L_username" class="layui-form-label">昵称</label>
                  <validation-provider rules="required" name="昵称" v-slot="{errors}">
                    <div class="layui-input-inline">
                      <input
                        type="text"
                        name="nickname"
                        placeholder="请输入昵称"
                        v-model="nickname"
                        autocomplete="off"
                        class="layui-input"
                      />
                    </div>
                    <div class="layui-input-mid error">{{errors[0]}}</div>
                  </validation-provider>
                </div>
                <div class="layui-form-item">
                  <label for="L_pass" class="layui-form-label">密码</label>
                  <validation-provider
                    name="密码"
                    rules="required|min:6|max:16"
                    v-slot="{errors}"
                    vid="password"
                  >
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
                    <div class="layui-form-mid layui-word-aux">6到16个字符</div>
                    <div class="layui-form-mid error">{{errors[0]}}</div>
                  </validation-provider>
                </div>
                <div class="layui-form-item">
                  <label for="L_repass" class="layui-form-label">确认密码</label>
                  <validation-provider
                    name="确认密码"
                    rules="required|confirmed:password"
                    v-slot="{errors}"
                  >
                    <div class="layui-input-inline">
                      <input
                        type="password"
                        name="repassword"
                        v-model="repassword"
                        placeholder="请输入相同的密码"
                        autocomplete="off"
                        class="layui-input"
                      />
                    </div>
                    <div class="layui-form-mid error">{{errors[0]}}</div>
                  </validation-provider>
                </div>
                <div class="layui-form-item">
                  <label for="L_vercode" class="layui-form-label">验证码</label>
                  <validation-provider name="验证码" rules="required|length:4" v-slot="{errors}">
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
                      <span class="svg" v-html="svg" @click="_getCode"></span>
                    </div>
                    <div class="layui-form-mid error">{{errors[0]}}</div>
                  </validation-provider>
                </div>
                <div class="layui-form-item">
                  <button class="layui-btn">立即注册</button>
                </div>
                <div class="layui-form-item fly-form-app">
                  <span>或者直接使用社交账号快捷注册</span>
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
  name: 'reg',
  components: {
    ValidationProvider
  },
  data () {
    return {
      username: '',
      nickname: '',
      password: '',
      repassword: '',
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
