// var controller = require('../controller/login');
var router = require('koa-router')();

router.get('/', function (ctx, next) {
    ctx.body = 'this a login response!';
});

module.exports = router;