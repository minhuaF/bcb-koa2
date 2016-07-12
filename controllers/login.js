var list = {
    login: async function (ctx, next){
        ctx.state = {
            title:'登录'
        };
        await ctx.render('index',{
            'name':'rainbow'
        });
    }
}
module.exports = list;