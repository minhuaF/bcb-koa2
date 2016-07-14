var controller = require('../controllers/login');
const router = require('koa-router')();

router.get('/', controller.login);

module.exports = router;