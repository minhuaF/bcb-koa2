import React from 'react';
import { Link, browserHistory } from 'react-router';
import WelfareUserList from './DayWelfareUserList.js';
import WelfareRule from './DayWelfareRule.js'

const WelfareAfter = React.createClass({

    getInitialState: function(){
        return {
            isShowRule: 'false'
        }
    },

    render: function(){
        return (
            <div className="mrfl">
                <div className="getalready">
                    <ul className="clearfix">
                        <li>
                            <p>今日已加息(%)</p>
                            <span>0.4</span>
                            <p>有效期1天</p>
                        </li>
                        <li>
                            <p>累计收益(元)</p>
                            <span>16.00 <i></i></span>
                        </li>
                    </ul>
                    <Link to="/productlist">马上投资</Link>
                    <WelfareUserList />
                    <span className="welfare-rule" onClick={ this._showRule } >活动规则&gt;</span>
                </div>
                <WelfareRule isShowRule = { this.state.isShowRule } />
            </div>
        )
    },

    _showRule: function(){
        this.setState({
            isShowRule: 'true'
        })
    },

});

module.exports = WelfareAfter;