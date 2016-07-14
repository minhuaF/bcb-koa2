module.exports = {
    path: 'loading',
    getComponent: function(location, cb){
        require.ensure([], function(require) {
            cb(null, require('../components/Loading.js'));
        });
    }
};