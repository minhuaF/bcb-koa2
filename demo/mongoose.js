// 流程就是：通过Schema创建一个模式userSchema ,通过模式userSchema创建一个模型user，通过模型user写入数据，通过save方法保存
// 定义schema->创建model->实例化方法
// 表 –》 合集 –》 文档

var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/koa');

// var Schema = mongoose.Schema;
//骨架模版
var userSchema = new mongoose.Schema({
    name: String,
    password: String,
})
//模型
var User = mongoose.model('users', userSchema);
//存储数据
var user = new User({
    name: "String",
    password: "String",
})


//保存数据库
// user.save(function(err) {
//     if (err) {
//         console.log('保存失败')
//         return;
//     }
//     console.log('save ok');
// });

// 修改数据
// User.update({'name':'String'}, {
//     $set: {'password':'123456'}
// }, function(err){
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('update successfully')
// });

// 删除数据
// User.remove({
//     'name':'String'
// }, function(err){
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('remove successfully')
// });

// 查询数据
// User.find({'password':'123456'}).count(function(err, count){
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(count);
// });

// User.find({name:'rainbow2'}, function(err, docs){
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(docs);
// });

