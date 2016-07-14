import request from 'superagent';

module.exports = {
    getData: function(cb){
        request
            .get('/data/dayWelfareInfo.json')
            .end(function(err, res){
                if(err){
                    return err;
                }
                cb(JSON.parse(res.text));
            })
    }
}