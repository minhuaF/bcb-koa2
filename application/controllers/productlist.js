const list = {
    productlist: async function(ctx, next){
        ctx.state = {
            title: ''
        };
        await ctx.render('', {});
    }
}

module.exports = list;