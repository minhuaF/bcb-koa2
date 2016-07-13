//1.链接数据库 mongoose 让nodejs更好的操作 mongodb
var mongoose = require('mongoose');

// var url = 'mongodb://' + dbHost + '.' + dbPort + '/' + dbName;
// mongoose.connect(url);

mongoose.connect('mongodb://localhost:27017/koa');

//2.声明一个Schema模型
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

//3.用户模型
var userSchema = new Schema({
    name: String,
    password: String,
    project: [{
        type: ObjectId,
        ref: 'Project'
    }]
});

//4.将声明的Schema转化为Model
// 建立Model
var User = mongoose.model('Users', userSchema);

//5.将Model实例化为Instance
var user = {
    name:'哈哈哈哈哈',
    password: '123321'
};

var newUser = new User(user);

// console.log("=====" + newUser.nick);

//6. Instance进行数据库CRUD操作
// 执行后数据库就有数据了
// 结合koa 要添加yield
var saveUser = function *(next){
    yield newUser.save();
    console.log("save success");
};

saveUser();

//7.使用Model进行表查询操作
// var userInfo = yield User.find({
//     "password":'123456'
// }.toArray(function(err, docs){
//     console.log('-------------------find-------------------------');
//     console.log(docs);
// }));
var userInfo;
var findUser = function *(next){
    userInfo = yield User.find({
        "password":'123456'
    }).exec();
    console.log("find success");
};
findUser();

console.log("=====");
console.log(userInfo);

// 错误捕获，不知道怎么整合
// try{
//     this.data = yield User.find({
//         uid: '123321'
//     });
// }catch(e){
//     console.log(e);
// }