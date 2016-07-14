// 导入中间件
const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const mount = require('mount-koa-routes');
const views = require('koa-views');
const co = require('co');
const convert = require('koa-convert'); // 对以generator作为中间件的写法进行长期支持
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')(); // 解析请求参数
const logger = require('koa-logger');
const db = require('./config/db');

// middlewares
app.use(convert(bodyparser)); // post body 解析
app.use(convert(json()));
app.use(convert(logger()));

// 设置静态资源目录
app.use(convert(require('koa-static')(__dirname + '/static')));

// 设置views的目录和所使用的模板
app.use(views(__dirname + '/static', {
  extension: 'html'
}));

// logger: 收到请求时，先执行这个generator方法
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// 路由方式一

// // routes 路由
// const index = require('./application/routes/index');
// const users = require('./application/routes/users');
// const login = require('./application/routes/login');
// const demo = require('./application/routes/demo');
// const productlist = require('./application/routes/productlist');
// // 定义路由
// router.use('/', index.routes(), index.allowedMethods());
// router.use('/users', users.routes(), users.allowedMethods());
// router.use('/signin', login.routes(), login.allowedMethods());
// router.use('/demo', demo.routes(), demo.allowedMethods());
// router.use('/productlist', productlist.routes(), productlist.allowedMethods());
// // 使路由生效
// app.use(router.routes(), router.allowedMethods());

// 路由方式一
mount(app, __dirname + '/application/routes', true);

// 监听错误
app.on('error', (err, ctx) => {
  console.log("---------error:" + err);
  log.error('server error', err, ctx);
});

module.exports = app;