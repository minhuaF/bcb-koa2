import React from 'react';
import { Link , browserHistory } from 'react-router';

const BuySuccess = React.createClass({
    render: function(){
        return(
            <div>
                <header className="title">
                <span className="back" onClick={ this._goBack }></span>
                项目投资详情</header>
                <section className="buysuccess-content white">
                    <header className="detail-rate clearfix">
                        <div>
                            <p>购买成功</p>
                            <p>-10000<span>.00</span></p>
                        </div>
                    </header>
                    <div className="bs-detail">
                        <ul>
                            <li className="clearfix">
                                <span>项目名称</span>
                                <span>体验标1602025214</span>
                            </li>
                            <li className="clearfix">
                                <span>预期收益</span>
                                <span>2.77元</span>
                            </li>
                            <li className="clearfix">
                                <span>投资时间</span>
                                <span>2016-02-23 10:03:04</span>
                            </li>
                            <li className="clearfix">
                                <span>融资金额</span>
                                <span>1000000.00元</span>
                            </li>
                            <li className="clearfix">
                                <span>年化收益率</span>
                                <span>10%</span>
                            </li>
                            <li className="clearfix">
                                <span>项目起利日</span>
                                <span>2016-02-23 10:03:04</span>
                            </li>
                            <li className="clearfix">
                                <span>项目到期日</span>
                                <span>2016-02-23 10:03:04</span>
                            </li>
                        </ul>

                    </div>
                </section>
                <p className="tel"><i></i>联系客服：020-38476886</p>
            </div>
        );
    },
    _goBack: function(){
        browserHistory.goBack();
    }
});

module.exports = BuySuccess;