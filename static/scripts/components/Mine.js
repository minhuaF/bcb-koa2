import React from 'react';

import { Link } from 'react-router';

import Footer from './Footer.js'; 

const Mine = React.createClass({
    render: function(){
        return (
            <div>
                <header className="title">我</header>
                <section className="mine-content">
                    <div className="join-company-banner"></div>
                    <table className="white table1">
                        <tr>
                            <td>
                                <p>总资产（元）</p>
                                <span className="total">0.00</span>
                            </td>
                            <td>
                                <p>账户余额（元）</p>
                                <span className="money1">0.00</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>待收本息（元）</p>
                                <span>0.00</span>
                            </td>
                            <td>
                                <p>冻结金额（元）<i></i></p>
                                <span>0.00</span>
                            </td>
                        </tr>
                    </table>
                    <div className="white">
                        <a href="#" className="button1">充值</a>
                        <a href="#" className="button2">提现</a>
                    </div>
                    <table className="table2 white">
                        <tr>
                            <td>
                                <i className="ico6"></i>
                                <p>投资记录</p>
                                <Link to='/investrecord'></Link>
                            </td>
                            <td>
                                <i className="ico7"></i>
                                <p>交易明细</p>
                                <Link to='/billrecord'></Link>
                            </td>
                            <td>
                                <i className="ico8"></i>
                                <p>借款</p>
                                <a href="#"></a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="ico9"></i>
                                <p>优惠券</p>
                                <a href="#"></a>
                            </td>
                            <td>
                                <i className="ico10"></i>
                                <p>邀请奖励</p>
                                <a href="#"></a>
                            </td>
                            <td>
                                <i className="ico11"></i>
                                <p>账号设置</p>
                                <a href="#"></a>
                            </td>
                        </tr>
                    </table>
                    <ul className="white">
                        <li>
                            <a href="#" className="clearfix">
                                <i className="ico12"></i>
                                <span>专属客服</span>
                                <span>闪电回复<i></i></span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="clearfix">
                                <i className="ico13"></i>
                                <span>客服热线</span>
                                <span>020-38476886<i></i></span>
                            </a>
                        </li>
                    </ul>
                </section>
                <Footer name="mine"/>
            </div>
        );
    },
});

module.exports = Mine;