
// 只要开启 mongodb 就可以，会自动创建表和数据库

var  mongodb = require('mongodb');
var  server  = new mongodb.Server('localhost', 27017, {auto_reconnect:true});
var  db = new mongodb.Db('koa', server, {safe:true});

//连接db
db.open(function(err, db){
    if(!err){
        console.log('connect db');
        // 连接Collection（可以认为是mysql的table）
        // 第1种连接方式
        // db.collection('users',{safe:true}, function(err, collection){
        //     if(err){
        //         console.log(err);
        //     }
        // });
        // 第2种连接方式
        db.createCollection('users', {safe:true}, function(err, collection){
            if(err){
                console.log(err);
            }else{
                //新增数据
				// for(var i = 0; i < 10; i++){
				// 	var tmp = {name:'rainbow'+i, password:'123456'};
				// 	collection.insert(tmp, {safe:true}, function(err, result){
				// 		console.log(result);
				// 	})
				// };

				// //更新数据
				collection.update({name:'rainbow0'}, {$set:{name:'rainbow'}}, {safe:true}, function(err, result){
					console.log(result);
				});

				// //删除数据
				// collection.remove({password:'123456'},{safe:true},function(err,result){
				// 	console.log(result);
				// });

                // console.log(collection);


                // 查询数据
                // var tmp1 = {name:'rainbow1'};
                // var tmp2 = {name:'rainbow2'};
				// collection.insert([tmp1,tmp2],{safe:true},function(err,result){
                //    console.log(result);
				// }); 
				collection.find({"name":'rainbow1'}).toArray(function(err,docs){
                   console.log('-------------------find-------------------------');
                   console.log(docs);
				}); 
				// collection.findOne(function(err,doc){
                //     console.log('findOne');
				// 	console.log(doc);
				// }); 
            }

        });
        // console.log('delete collection ...');
		
        // //删除Collection
        // db.dropCollection('users',{safe:true},function(err,result){
        //     if(err){
        //         console.log('err:');
        //         console.log(err);
        //     }else{
        //         console.log('ok:');
        //         console.log(result);
        //     }
        // }); 
    }else{
        console.log(err);
    }
});