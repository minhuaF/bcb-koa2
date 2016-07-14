module.exports = {
    path: 'security',
    getComponent: function(location, cb){
        require.ensure([], function(require){
            cb(null, require('../components/Security.js'));
        })
    }
};