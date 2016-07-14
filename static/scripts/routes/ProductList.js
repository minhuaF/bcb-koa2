module.exports = {
    path: 'productlist',
    getComponent: function(location, cb){
        require.ensure([], function(require) {
            cb(null, require('../components/ProductList.js'));
        });
    }
};