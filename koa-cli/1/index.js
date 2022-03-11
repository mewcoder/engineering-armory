const Koa = require("koa");

const Router = require("koa-router");

const app = new Koa();

const router = new Router();
router.get("/", (ctx) => {
  ctx.body = "hello koa";
});
app.use(router.routes());

app.listen(3000, () => {
  console.log("open server localhost:3000");
});
