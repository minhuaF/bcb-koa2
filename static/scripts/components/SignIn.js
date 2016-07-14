import React from 'react';
import { Link, browserHistory } from 'react-router';


const SignIn = React.createClass({
      render: function(){
        return(
           
            <div>
                <header className="title">
                <span className="back" onClick={ this._goBack }></span>
                登录
                <Link to="/signup" className="r-font">注册</Link>
                </header>
                <section className="login">
                  <div className="login-logo"></div>
                  <ul className="reg-info">
                    <li className="reg-phone"><input id="txt_mobile" type="text" placeholder="请输入手机号码" /></li>
                    <li className="reg-word"><input id="txt_pwd" type="password" placeholder="输入密码" /></li>
                  </ul>
                  <div id="btn_login" className="btn-long">登录</div>
                  <div className="login-tips">
                    <a href="#">忘记密码 <i></i></a>
                    <a href="#">登录有问题，客服帮解决</a>
                  </div>
                </section>
            </div>
        );
    },  

    _goBack: function(){
        browserHistory.goBack();
    },

    
});
module.exports = SignIn;