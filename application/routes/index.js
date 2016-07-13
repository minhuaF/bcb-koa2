const controller = require('../controllers/index');

const router = require('koa-router')();

router.get('/', controller.index)

module.exports = router;
