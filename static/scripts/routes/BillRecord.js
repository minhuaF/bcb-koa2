module.exports = {
    path:'billrecord',
    getComponent: function(location, cb){
        require.ensure([], function(require){
            cb(null, require('../components/BillRecord.js'));
        })
    }
}
