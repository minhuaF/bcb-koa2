module.exports = {
    path:'collectlove',
    getComponent: function(location, cb){
        require.ensure([], function(require){
            cb(null, require('../components/CollectLove.js'));
        })
    }
}