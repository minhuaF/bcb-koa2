var controller = require('../controllers/index');

var router = require('koa-router')();

router.get('/', controller.index)
module.exports = router;
