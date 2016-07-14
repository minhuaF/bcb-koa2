const list = {
    login: async function (ctx, next){
        ctx.state = {
            title:'登录'
        };
        await ctx.render('',{
            // 'name':'rainbow'
        });
    }
}
module.exports = list;