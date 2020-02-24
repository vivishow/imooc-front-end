(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["reg"],{"442e":function(t,a,e){},"7e2b":function(t,a,e){"use strict";var s=e("442e"),i=e.n(s);i.a},b8b8:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"layui-container fly-marginTop"},[e("div",{staticClass:"fly-panel fly-panel-user",attrs:{pad20:""}},[e("div",{staticClass:"layui-tab layui-tab-brief",attrs:{"lay-filter":"user"}},[e("ul",{staticClass:"layui-tab-title"},[e("li",[e("router-link",{attrs:{to:{name:"login"}}},[t._v("登入")])],1),e("li",{staticClass:"layui-this"},[t._v("注册")])]),e("div",{staticClass:"layui-form layui-tab-content",staticStyle:{padding:"20px 0"},attrs:{id:"LAY_ucm"}},[e("validation-observer",{ref:"observer",scopedSlots:t._u([{key:"default",fn:function(a){var s=a.validate;return[e("div",{staticClass:"layui-tab-item layui-show"},[e("div",{staticClass:"layui-form layui-form-pane"},[e("form",{attrs:{method:"post"}},[e("div",{staticClass:"layui-form-item"},[e("validation-provider",{attrs:{name:"username",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors;return[e("div",{staticClass:"layui-row"},[e("label",{staticClass:"layui-form-label",attrs:{for:"L_email"}},[t._v("用户名")]),e("div",{staticClass:"layui-input-inline"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"layui-input",attrs:{type:"text",name:"username",placeholder:"请输入用户名",autocomplete:"off"},domProps:{value:t.username},on:{input:function(a){a.target.composing||(t.username=a.target.value)}}})]),e("div",{staticClass:"layui-form-mid layui-word-aux"},[t._v("将会成为您唯一的登入名")])]),e("div",{staticClass:"layui-row"},[e("span",{staticStyle:{color:"#c00"}},[t._v(t._s(s[0]))])])]}}],null,!0)})],1),e("div",{staticClass:"layui-form-item"},[e("label",{staticClass:"layui-form-label",attrs:{for:"L_username"}},[t._v("昵称")]),e("validation-provider",{attrs:{name:"name",rules:"required|min:4|name"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors;return[e("div",{staticClass:"layui-input-inline"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"layui-input",attrs:{type:"text",name:"name",placeholder:"请输入昵称",autocomplete:"off"},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}})]),e("div",{staticClass:"layui-form-mid"},[e("span",{staticStyle:{color:"#c00"}},[t._v(t._s(s[0]))])])]}}],null,!0)})],1),e("div",{staticClass:"layui-form-item"},[e("validation-provider",{attrs:{name:"password",rules:"required|min:6|max:16|confirmed:confirmation"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors;return[e("div",{staticClass:"layui-row"},[e("label",{staticClass:"layui-form-label",attrs:{for:"L_pass"}},[t._v("密码")]),e("div",{staticClass:"layui-input-inline"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"layui-input",attrs:{type:"password",name:"password",placeholder:"请输入密码",autocomplete:"off"},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}})]),e("div",{staticClass:"layui-form-mid layui-word-aux"},[t._v("6到16个字符")])]),e("div",{staticClass:"layui-row"},[e("span",{staticStyle:{color:"#c00"}},[t._v(t._s(s[0]))])])]}}],null,!0)})],1),e("div",{staticClass:"layui-form-item"},[e("validation-provider",{attrs:{vid:"confirmation"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors;return[e("div",{staticClass:"layui-row"},[e("label",{staticClass:"layui-form-label",attrs:{for:"L_repass"}},[t._v("确认密码")]),e("div",{staticClass:"layui-input-inline"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.repassword,expression:"repassword"}],staticClass:"layui-input",attrs:{type:"password",name:"repassword",placeholder:"请输入密码",autocomplete:"off"},domProps:{value:t.repassword},on:{input:function(a){a.target.composing||(t.repassword=a.target.value)}}})])]),e("div",{staticClass:"layui-row"},[e("span",{staticStyle:{color:"#c00"}},[t._v(t._s(s[0]))])])]}}],null,!0)})],1),e("div",{staticClass:"layui-form-item"},[e("validation-provider",{attrs:{name:"code",rules:"required|length:4"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors;return[e("div",{staticClass:"layui-row"},[e("label",{staticClass:"layui-form-label",attrs:{for:"L_vercode"}},[t._v("验证码")]),e("div",{staticClass:"layui-input-inline"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"layui-input",attrs:{type:"text",name:"code",placeholder:"请输入验证码",autocomplete:"off"},domProps:{value:t.code},on:{input:function(a){a.target.composing||(t.code=a.target.value)}}})]),e("div",{},[e("span",{staticClass:"svg",staticStyle:{color:"#c00"},domProps:{innerHTML:t._s(t.svg)},on:{click:function(a){return t._getCode()}}})])]),e("div",{staticClass:"layui-form-mid"},[e("span",{staticStyle:{color:"#c00"}},[t._v(t._s(s[0]))])])]}}],null,!0)})],1),e("div",{staticClass:"layui-form-item"},[e("button",{staticClass:"layui-btn",attrs:{type:"button"},on:{click:function(a){s().then(t.submit)}}},[t._v("立即注册")])]),e("div",{staticClass:"layui-form-item fly-form-app"},[e("span",[t._v("或者直接使用社交账号快捷注册")]),e("a",{staticClass:"iconfont icon-qq",attrs:{href:"",onclick:"layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})",title:"QQ登入"}}),e("a",{staticClass:"iconfont icon-weibo",attrs:{href:"",onclick:"layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})",title:"微博登入"}})])])])])]}}])})],1)])])])},i=[],r=(e("b0c0"),e("6b47")),o=e.n(r),l=(e("96cf"),e("89ba")),n=e("7ded"),u=e("7bb1"),c={name:"reg",data:function(){return{username:"",name:"",password:"",repassword:"",code:"",svg:""}},components:{ValidationProvider:u["b"],ValidationObserver:u["a"]},mounted:function(){this._getCode()},methods:{_getCode:function(){var t=this,a=this.$store.state.sid;Object(n["b"])(a).then((function(a){200===a.code&&(t.svg=a.data)}))},submit:function(){var t=Object(l["a"])(o.a.mark((function t(){var a,e=this;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$refs.observer.validate();case 2:if(a=t.sent,a){t.next=5;break}return t.abrupt("return");case 5:Object(n["d"])({username:this.username,password:this.password,name:this.name,code:this.code,sid:this.$store.state.sid}).then((function(t){200===t.code?(e.username="",e.password="",e.repassword="",e.name="",e.code="",requestAnimationFrame((function(){e.$refs.observer.reset()})),e.$alert("注册成功"),setTimeout((function(){e.$router.push("/login")}),1e3)):e.$refs.observer.setErrors(t.msg)}));case 6:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}()}},d=c,m=(e("7e2b"),e("2877")),p=Object(m["a"])(d,s,i,!1,null,"12bc3ada",null);a["default"]=p.exports}}]);
//# sourceMappingURL=reg.4ce11301.js.map