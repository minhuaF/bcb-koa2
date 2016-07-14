"use strict";

import React from 'react';
import { Link, browserHistory } from 'react-router';
import SignUpUtil from '../utils/SignUpUtil.js';
import classNames from 'classNames';


const errMap = {
    'password_tips': '请输入8-15位的密码',
    'password_inconformity': '两次密码不一致',
    'empty_code': '验证码不能为空',
    'wrong_code': '验证码错误'
};

const SignUpPsw = React.createClass({

    contextTypes: {
        router: React.PropTypes.object
    },

    getInitialState: function(){
        return {
            passwordTips: '',
            codeError: '',
            time: 60,
            waiting: false, 
            sent: false,
            level:''
        };
    },

    render: function(){
        return (
            <div>
                <header className="title">
                <span className="back" onClick={  this._goBack }></span>
                注册</header>
                <section className="register2">
                    <ul className="reg-info">
                        <li className="reg-word dropdown">
                            <input type="password" placeholder="请输入8-15位的密码" maxlength="15" ref="password" onChange={ this._checkPsw }/>
                            <div className="strength">
                                <span className={classNames({
                                    'active': this.state.level == 1 ? 'true' : ''
                                })}>弱</span>
                                <span className={classNames({
                                    'active': this.state.level == 2 ? 'true' : ''
                                })}>中</span>
                                <span className={classNames({
                                    'active': this.state.level == 3 ? 'true' : ''
                                })}>强</span>
                            </div>
                        </li>
                        <li className="reg-word dropdown">
                            <input type="password" placeholder="再次输入密码" ref="password2" onChange={ this._checkPswSame }/>
                            {
                                this.state.passwordTips != '' ? <p>{this.state.passwordTips}</p> : null
                            }
                        </li>
                        <li className="reg-word dropdown">
                            <input type="text" placeholder="请输入验证码" maxlength="6" ref="verifyCode"/>
                            <button type="button" className="get-word" disabled={ this.state.waiting } onClick={ this._getCode }>
                            { '获取验证码' + (this.state.waiting ? '(' + this.state.time + ')' : '') }
                            </button>
                        </li>
                            {
                                this.state.codeError != '' ? <p>{this.state.codeError}</p> : null
                            }
                    </ul>
                    <div id="btn_login" className="btn-long" onClick={ this._submit }>完成</div>
                    <a href="#">收不到验证码？客服帮您解决</a>
                </section>
            </div>
        );
    },

    _goBack: function(){
        browserHistory.goBack();
    },

    _getCode: function(){
        this.setState({
            waiting: true
        });

        SignUpUtil.getCode(function(res){
            if(res.state){
                this._startTick();
            }
        }.bind(this));
    },

    _startTick: function(){
        this.tick = setInterval(function(){
            if(this.state.time > 0){
                this.setState({
                    time: -- this.state.time
                });
                return;
            }

            this._clearTick();
            this.setState({
                time: 60,
                waiting: false
            });
        }.bind(this), 1000);
    },

    _clearTick: function(){
        clearInterval(this.tick);
    },

    _checkPsw: function(){
        var data = {};
        data.password = this.refs.password.value;

        // set password level 
        // 如果有中文则置空
        if(/^[\u4E00-\u9FA5]/.test(data.password)){
            this.refs.password.value = '';
        }else if(data.password.length < 8 ){
            this.setState({
                passwordTips: errMap['password_tips'],
                level: '1'
            });
        }else{
            this.setState({
                passwordTips: '',
            });
            //如果只存在数字、字母或特殊合法字符单一组合，密码显示为弱

            if(this._isNum(data.password) || this._isAZ(data.password) || this._isSpecialRightCode(data.password)){
                this.setState({
                    level: '1',
                });
            }
            //如果包含三种类型的字符并且长度超过10位，则密码强度显示为强
            else if(this._isHybridRightCode(data.password) && data.password.length > 10){
                this.setState({
                    level: '3',
                });
            }
            //既不是单一组合，也不包含三种字符类型或者包含三种字符但长度不够10的，均显示为中
            else{
                this.setState({
                    level: '2',
                });
            }
        }

        if(data.password.length == 0 ){
            this.setState({
                level: '',
            })
        }
    },

    // 判断是否为数字、字母、字符等合法自字符
    _isRightCode: function(str){
        var strArray = str.split("");
        for(var i = 0; i < strArray.length; i++){
            if( strArray[i] < 33 || strArray[i] > 126){
                return false;
            }
        }
        return true;
    },
    // 判断是否是数字
    _isNum: function(str){
        var objReg = /^[0-9]*$/;
        return objReg.test(str);
    },
    // 判断是否是字母
    _isAZ: function(str){
        var objReg = /^[a-zA-Z]*$/;
        return objReg.test(str);
    },
    // 判断是否是除了数字、字母外的特殊合法字符
    _isSpecialRightCode: function(str){
        var strArrayCode = this._stringToCharCode(str);
        for(var i = 0; i < strArrayCode.length; i++){
            // 如果是特殊合法字符， 继续下一次检查，否则返回false
            if((strArrayCode[i] >= 33 && strArrayCode[i] <= 47)
                || (strArrayCode[i] >= 58 && strArrayCode[i] <= 64)
                || (strArrayCode[i] >= 91 && strArrayCode[i] <= 96)
                || (strArrayCode[i] >= 123 && strArray[i] <= 126))
                continue;
            else
                return false;
        }
        return true;
    },

    // 判断是否为数字、字母和特殊字符的组合
    _isHybridRightCode: function(str){
        var strArrayCode = new Array();
        strArrayCode = this._stringToCharCode(str);
        var numStatus = new Boolean(false);
        var azStatus = new Boolean(false);
        var specialStatus = new Boolean(false);

        for (var i = 0; i < strArrayCode.length; i++){
            // 包含数字，numStatus=true
            if(strArrayCode[i] >= 48 && strArrayCode[i] <=57 )
                numStatus = true;

            // 包含字母，azStatus=true
            if(strArrayCode[i] >=64 && strArrayCode[i] <= 90 || strArrayCode[i] >= 97 && strArrayCode[i] <=122)
                azStatus = true;
            
            // 包含特殊字符， specialStatus = true
            if((strArrayCode[i] >= 33 && strArrayCode[i] <= 47)
                || (strArrayCode[i] >= 58 && strArrayCode[i] <= 64)
                || (strArrayCode[i] >= 91 && strArrayCode[i] <= 96)
                || (strArrayCode[i] >= 123 && strArrayCode[i] <= 126))
                specialStatus = true;
        }
        return numStatus && azStatus && specialStatus;
    },

    // 字符串 - 字符数组 - ASCII码
    _stringToCharCode: function(str){
        var strArray = str.split("");
        var charCode = new Array();
        for(var i = 0; i < strArray.length; i++){
            charCode[i] = strArray[i].charCodeAt(0);
        }
        return charCode;
    },

    _checkPswSame: function(){
        var data = {};
        data.password = this.refs.password.value;
        data.password2 = this.refs.password2.value;

         if(!/^[a-zA-Z0-9]{8,15}$/.test(data.password2)){
            this.setState({
                phoneError: errMap['password_tips']
            });
            return;
        }
        if(data.password != data.password2){
                this.setState({
                    phoneError: errMap['password_inconformity']
                });
            return;
        }
        this.setState({
            phoneError:''
        })
    },

    _submit: function(){
        var data = {};
        data.password = this.refs.password.value;
        data.verifyCode = this.refs.verifyCode.value;

        SignUpUtil.getCode(data, function(res){
            if(!res.state){
                this.setState({
                    
                })
            }
        })

    }
});

module.exports = SignUpPsw;