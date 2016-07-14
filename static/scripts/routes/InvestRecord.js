module.exports = {
    path: 'investrecord',
    getComponent: function(location, cb){
        require.ensure([], function(require){
            cb(null, require('../components/InvestRecord.js'));
        })
    }
}