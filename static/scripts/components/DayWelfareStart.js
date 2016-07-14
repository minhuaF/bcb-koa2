import React from 'react';
import { Link, browserHistory } from 'react-router';
import WelfareRule from './DayWelfareRule.js';
import WelfareUserList from './DayWelfareUserList.js';

const WelfareStart = React.createClass({

    getInitialState: function(){
        return {
            isShowRate: 'false',
            isShowRule: 'false'
        }
    },

    render: function(){
        return (
            <div className="mrfl" >
                <div className="mrfl-content">
                    <div className="mrfl-bg dropdown">
                        <p className="mrfl-title"></p>
                        <div className="luck-click" onClick={ this._showRate } ></div>
                        <p className="lucky-bag" ></p>
                        <WelfareUserList />
                        <span className="welfare-rule" onClick={ this._showRule } >活动规则&gt;</span>
                    </div>
                </div>
                <WelfareRate isShowRate = { this.state.isShowRate } />
                <WelfareRule isShowRule = { this.state.isShowRule } />

            </div>
        )
    },

    _showRate: function(){
        this.setState({
            isShowRate: 'true',
            isShowRule: 'false'
        })
    },

    _showRule: function(){
        this.setState({
            isShowRate: 'false',
            isShowRule: 'true'
        })
    },

    _goBack: function(){
        browserHistory.goBack();
    }
});

const WelfareRate = React.createClass({

    getInitialState: function(){
        return {
            isShowRate: this.props.isShowRate
        }
    },
    // 在组件接收到一个新的prop时执行；在初始化render时不会被调用
    componentWillReceiveProps: function(nextProps){
        this.setState({
            isShowRate: nextProps.isShowRate
        });
    },

    render: function(){

        if( this.state.isShowRate == 'false' ){
            return null;
        }

        return (
            <div className="raise-rates" onClick={ this._hideRate }>
                <div className="mrfl-bg2">
                    <i></i>
                    <Link to="/productlist">马上投资</Link>
                    <p>活动累计加息3.0元 <i></i></p>
                </div>
                <div className="shadow">
                    <b></b>
                    <div className="rates-circle">
                        <p>+0.4%</p>
                        <p>在投金额已加息<br/>
                            (有效期1天)</p>
                    </div>
                </div>
            </div>
        )
    },

    _hideRate: function(){
        this.setState({
            isShowRate: 'false'
        })
    },
});



module.exports = WelfareStart;