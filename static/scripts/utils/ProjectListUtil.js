import request from 'superagent';
import A from '../A.js';

//JSON.parse()将JSON数据转换为对象

module.exports = {
    getData: function(cb){
        request
            .get('/data/projectList.json')
            // .query(q)
            // .use(A.ajaxLoading())
            // .use(A.ajaxAuth())
            .end(function(err, res) {
                if(err){
                    return err;
                }

                console.log("----res:" + JSON.parse(res.text).Result.TotalCount);
                console.log("----res:" + JSON.parse(res.text).Result.Records[0].Name);
                cb(JSON.parse(res.text));
            })
    }
}