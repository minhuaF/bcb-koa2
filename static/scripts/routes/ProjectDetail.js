module.exports = {
    path: 'projectdetail',
    getComponent: function(location, cb){
        require.ensure([], function(require){
            cb(null, require('../components/ProjectDetail.js'))
        });
    }
};