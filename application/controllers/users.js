const list = {
    users:async function (ctx, next) {
        ctx.state = {
            title: 'users test page'
        };
        await ctx.render('users',{})
    },

    getDataById: function(ctx, next){
        let id = ctx.params.id;
        ctx.body = 'your id is : ' + id + ', thank you !';
    },

    postData: function(ctx, next){
        let data = ctx.request.body;
        let id = ctx.request.body.id || 0;
        ctx.body = 'you post data: ' + JSON.stringify({id:id}) + '-----' + JSON.stringify(data);

        // redirect
        if(data.age == '25'){
            ctx.redirect('/'); 
        }
    },

    getDataList: function(ctx, next){
        let arr = [
            {'name':'zhangsan','age':'24','sex':'male','addr':'广东广州'},
            {'name':'lisi','age':'23','sex':'male','addr':'广东梅州'},
            {'name':'wangwu','age':'54','sex':'female','addr':'湖南长沙'},
            {'name':'laoliu','age':'24','sex':'male','addr':'江苏南京'},
            {'name':'haidi','age':'34','sex':'female','addr':'浙江杭州'}
        ]
        let id = parseInt(ctx.params.id) || 0;
        if(id>arr.length-1){
            let info = showMsg(400,'out of index!',null);  
            console.log(info);  
            ctx.body = info;  
            return;  
        }
        let data = arr[id];
        ctx.body = data;
    },

    showMsg: function(status, msg, data){
        let obj={};
        obj.status = status || 400;
        obj.msg = msg || '';
        obj.data = data || null;
        return obj;
    }, 
}

module.exports = list;