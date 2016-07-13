const UserModel = require('../models/user');
const list = {

    demo: function(ctx, next){
        ctx.body = '<h1>This is a demo page~</h1>'
    },

    getOne: async function (ctx, next){
        ctx.state = {
            title: 'demo',
            info: '条件查询 —— 查询name="rainbow2"的记录'
        };
        let user = await UserModel.findByUsername('rainbow2');
        await ctx.render('demoGetOne', {
            'user': user
        })
    },

    getAll: async function(ctx, next){
        ctx.state = {
            title: 'demo',
            info: '查询所有数据'
        };
        let users = await UserModel.findAll();
        await ctx.render('demoGetAll', {
            'users': users
        })
    },

    postSave: async function(ctx, next){
        ctx.state = {
            title: 'demo',
            info: '表单post提交数据存进数据库'
        };
        await ctx.render('demoPostSave',{});
    },

    postSaveHandler: function(ctx, next){
        let user = ctx.request.body;
        ctx.body = 'you post data: ' + JSON.stringify( user);
        UserModel(user).save();
    },

    postVerify: async function(ctx, next){
        ctx.state = {
            title: 'demo',
            info: '表单post提交数据验证返回结果'
        };
        await ctx.render('demoPostVerify', {});
    },

    postVerifyHandler: async function(ctx, next){
        let user = ctx.request.body;
        ctx.body = 'you post data: ' + JSON.stringify( user) + '          还没有处理';

    }
}

module.exports = list;