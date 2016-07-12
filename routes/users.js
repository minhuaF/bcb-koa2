var controller = require('../controllers/users');
var router = require('koa-router')();

router.get('/', controller.users);

module.exports = router;
