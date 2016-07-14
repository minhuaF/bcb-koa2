const controller = require('../controllers/productlist');
const router = require('koa-router')();

router.get('/', controller.productlist);

module.exports = router;