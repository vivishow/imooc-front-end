# 4-8 作业 Mock 数据实践

## 任务描述

数据结构如下:

```
{
  "status": 0,
  "data": [
    {
      "tid": "1",
      "title": "12154545",
      "catalog": "index",
      "fav": 20,
      "created": "1436864169",
      "isEnd": "0",
      "answer": "10",
      "user": {
        "avatar": "用户头像",
        "name": "用户昵称",
        "isVip": "1",
        "level": "4"
      }
    }
  ],
  "msg": "返回Mock数据"
}
```

1. 接口为 GET 请求。
2. 传递两个参数 num 与 Page。
   传递参数 num，num=3 即返回 data 数据为 3 个，num 为 10，则返回 10 个。page 传一个整数
3. 数据结构如上。
4. 接口路径，即 Api 为“/lists”
5. 不限于接口测试类的工具，但是需要使用到 Mock 数据（有的同学可能会去使用 DOClever 也行）

## 实际操作

1. 通过 Mock.js 拦截 axios 请求, 获取数量参数(num)后, 返回 Mock 的数据.
2. 在 template 中显示相应数量(page)的页数按钮.
3. 添加切换页面的功能, 点击页数按钮时显示对应的数据.
4. 监听 page, 并根据变化显示对应数据.
