var controller = require('../controllers/users');
var router = require('koa-router')();

router.get('/', controller.users);

router.get('/:id', controller.getDataById);

router.post('/post', controller.postData);

router.get('/group/:id', controller.getDataList);

module.exports = router;


// test URL
// http://localhost:3000/users
// http://localhost:3000/users/post [id=123321]
// http://localhost:3000/users/3
// http://localhost:3000/users/group/1