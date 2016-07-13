var controller = require('../controllers/demo');

var router = require('koa-router')();

router.get('/', controller.demo);
router.get('/getone', controller.getOne);
router.get('/getall', controller.getAll);
router.get('/postsave', controller.postSave);
router.post('/postsave/handler', controller.postSaveHandler);
router.get('/postverify', controller.postVerify);
router.post('/postverify/handler', controller.postVerifyHandler);

module.exports = router;