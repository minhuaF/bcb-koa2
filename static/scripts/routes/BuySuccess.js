module.exports = {
    path: 'buysuccess',
    getComponent: function(location, cb){
        require.ensure([], function(require){
            cb(null, require('../components/BuySuccess.js'));
        })
    }
}