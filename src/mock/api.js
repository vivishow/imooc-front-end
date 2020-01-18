import mock from "mockjs";
// 这个一个获取URL参数的方法
// import { getParamsMethod1 } from "./utils";

// mock.mock('http://your.domain.com/test', {
//   'users|1-10': [{
//     'id|+1': 1,
//     'name': '@cname',
//     'city': '@city',
//     'image': '@image'
//   }]
// })

mock.mock(/lists/, function(options) {
  let num = options.url.match(/num=(.*)$/)[1];

  return mock.mock({
    status: 0,
    [`data|${num}`]: [
      {
        "tid|+1": 1,
        title: "@ctitle(2,5)",
        catalog: "index",
        fav: "@natural(1000,99999)",
        created: "@datetime",
        isEnd: "@pick([0,1])",
        answer: "@natural(1,100)",
        user: {
          avatar: "@image",
          name: "@cname",
          isVip: "@pick([0,1])",
          level: "@integer(0,6)"
        }
      }
    ],
    msg: "返回Mock数据"
  });
});

// 在这里编写你的逻辑代码
