module.exports = {
    path:'mine',
    getComponent: function(Location, cb){
        require.ensure([], function(require){
            cb(null, require('../components/Mine.js'));
        });
    }
};