import request from 'superagent';
import A from '../A.js';

module.exports = {
    setPhone: function(data, cb){
        // request
        //     .post('')
        //     .use(A.ajaxLoading())
        //     .send(data)
        //     .end(function(err, res){
        //         if(err){
        //             return err;
        //         }
        //         cb(JSON.parse(res.text));
        //     });
        
        // test
        request
            .get('/data/testState.json')
            .end(function(err, res){
                if(err){
                    return err;
                }
                cb(JSON.parse(res.text));
            })

    },

    getCode: function(cb){
        request
            .get('/data/testState.json')
            .end(function(err, res){
                if(err){
                    return err;
                }
                cb(JSON.parse(res.text));
            })
    },

    signUp: function(data, cb){
        request
            .post('/')
            .send(data)
            .end(function(err, res){
                if(err){
                    return err;
                }
                cb(JSON.parse(res.text));
        })
    },
}