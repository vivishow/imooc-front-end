const Koa = require("koa");
const Router = require("koa-router");
const KoaBody = require("koa-body");
const cors = require("@koa/cors");
const KoaJson = require("koa-json");
const app = new Koa();
app.use(KoaBody());
app.use(cors());
app.use(KoaJson());
const router = new Router();

router.post("/api/user", async ctx => {
  if (!ctx.header.role || ctx.header.role != "admin") {
    ctx.status = 401;
    ctx.body = {
      code: 401,
      msg: "unauthorized post"
    };
  } else if (!ctx.request.body.name || !ctx.request.body.email) {
    ctx.status = 404;
    ctx.body = {
      code: 404,
      msg: "name与email不得为空"
    };
  } else {
    ctx.status = 200;
    ctx.body = {
      code: 200,
      data: ctx.request.body,
      msg: "上传成功"
    };
  }
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
