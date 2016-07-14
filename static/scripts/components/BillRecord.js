import React from 'react';
import {Link, browserHistory} from 'react-router';

const BillRecord = React.createClass({
    render: function(){
        return (
            <div>
                <header className="title">
                <span className="back" onClick={ this._goBack }></span>
                交易明细</header>
                <section className="fd-content">
                    <div className="fd-detail white">
                        <ul>
                            <li>
                                <p className="fd-time">2016年03月23日</p>
                                <ul className="fd-item">
                                    <li>
                                        <p className="income">+0.1</p>
                                        <span>活动奖励 <i></i></span>
                                        <a href="#"></a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="fd-time">2017年03月23日</p>
                                <ul className="fd-item">
                                    <li>
                                        <p className="income">+0.1</p>
                                        <span>活动奖励 <i></i></span>
                                        <a href="#"></a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="fd-time">2018年03月23日</p>
                                <ul className="fd-item">
                                    <li>
                                        <p className="income">+0.1</p>
                                        <span>活动奖励 <i></i></span>
                                        <a href="#"></a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="fd-time">2016年08月23日</p>
                                <ul className="fd-item">
                                    <li>
                                        <p className="expend">-445</p>
                                        <span>投资成功 <i></i></span>
                                        <a href="#"></a>
                                    </li>
                                    <li>
                                        <p className="expend">-12000</p>
                                        <span>投资成功 <i></i></span>
                                        <a href="#"></a>
                                    </li>
                                    <li>
                                        <p className="expend">-895</p>
                                        <span>投资成功 <i></i></span>
                                        <a href="#"></a>
                                    </li>
                                    <li>
                                        <p className="expend">-5987</p>
                                        <span>投资成功 <i></i></span>
                                        <a href="#"></a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className=" hide">
                        <i></i>
                        <p>暂无流水记录</p>
                    </div>
                </section>
            </div>
        );
    },

    _goBack: function(){
        browserHistory.goBack();
    }

});

module.exports = BillRecord;