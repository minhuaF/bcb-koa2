const list = {
    index: async function (ctx, next) {
        ctx.state = {
            title: 'koa2 title'
        };

        await ctx.render('index', {
            'name':'rainbow'
        });
    }
}

module.exports = list;