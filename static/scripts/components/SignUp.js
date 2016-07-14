"use strict";

import React from 'react';
import { Link, browserHistory } from 'react-router';
import classNames from 'classNames';
import fto from 'form_to_object'; // 封装form数据
import SignUpUtil from '../utils/SignUpUtil.js';

import TipsMessage from './TipsMessage.js';


const errMap = {
    'empty_phone': '请填写手机号',
    'wrong_phone': '手机号码无效'
};


const SignUp = React.createClass({

    contextTypes: {
        router: React.PropTypes.object
    },

    getInitialState: function(){
        return {
            error:'',
        };
    },

    render: function(){
        return (
            <div>
                <header className="title">
                    <span className="back" onClick={ this._goBack }></span>
                    注册
                    <Link to="/signIn" className="r-font">登录</Link>
                </header>
                <section className="register">
                    <ul className="reg-info">
                        <li className="reg-phone"><input id="txt_mobile" type="text" placeholder="请输入手机号码" ref="phone"/></li>
                        {
                            this.state.error !='' ? <li className="register-tips">{ this.state.error }</li> : null
                        }
                    </ul>
                    <div id="btn_login" className="btn-long" onClick={ this._submit }>下一步</div>
                </section>
                <TipsMessage error={ this.state.error }/>
            </div>
        );
    },

    _goBack: function(){
        browserHistory.goBack();
    },

    _submit: function(){
        var data= {};
        data.phone = this.refs.phone.value;

        if(!data.phone){
            this.setState({
                error: errMap['empty_phone']
            });
            return false;
        }

        
        if(!/^(((13[0-9]{1})|(14[5,7]{1})|(15[0,1,2,3,5,6,7,8,9]{1})|(18[0-9]{1})|(17[0,6,7,8]{1}))+\d{8})$/.test(data.phone)){
            this.setState({
                error: errMap['wrong_phone']
            });
            return false;
        }

        SignUpUtil.setPhone(data, function(res){
            var loc = this.props.location;
            // 逻辑代码
            
            console.log("signup Phone is :" + res.state);

            if(res){
                this.context.router.push('/signuppsw');  // 是使用push还是replace???
            }

            this.setState({
                error: errMap[res.reason]
            });
        }.bind(this));

        return false;
    }
});

module.exports = SignUp;