module.exports = {
    path: 'projectdetailinfo',
    getComponent: function(location, cb){
        require.ensure([], function(require){
            cb(null, require('../components/ProjectDetailInfo.js'))
        });
    }
};