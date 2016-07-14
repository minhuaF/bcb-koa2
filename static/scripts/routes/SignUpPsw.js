module.exports = {
    path: 'signuppsw',
    getComponent: function(location, cb){
        require.ensure([], function(require) {
            cb(null, require('../components/SignUpPsw.js'));
        });
    }
};