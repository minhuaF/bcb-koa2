module.exports = {
    path: 'home',
    getComponent: function(location, cb){
        require.ensure([], function(require) {
            cb(null, require('../components/Home.js'));
        });
    }
};