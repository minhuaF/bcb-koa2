module.exports = {
    path: 'daywelfare',
    getComponent: function(location, cb){
        require.ensure([], function(require){
            cb(null, require('../components/DayWelfareContainer.js'));
        })
    }
}