import React from 'react';
import {Link, browserHistory } from 'react-router';

const ProjectDetail = React.createClass({

    contextTypes: {
        router: React.PropTypes.object
    },

    render: function(){
        return (
            <div>
                <header className="title">
                <span className="back" onClick={ this._goBack }></span>
                涨薪宝2016020366
                <a href="#" className="share"></a>
                </header>
                <section className="detail-content">
                    <header className="detail-rate clearfix">
                        <div>
                            <p>年化利率</p>
                            <p>8.5<span>%+2.00%</span></p>
                        </div>
                        <p>本息保障</p>
                    </header>
                    <div className="detail-info white">
                        <ul className="clearfix">
                            <li>
                                <p>可投金额(元)</p>
                                <p>130000.00</p>
                            </li>
                            <li>
                                <p>理财期限(天)</p>
                                <p>30</p>
                            </li>
                            <li>
                                <p>起投金额(元)</p>
                                <p>100.00</p>
                            </li>
                        </ul>
                    </div>
                    <div className="detail-progress white">
                        <ul>
                            <li className="clearfix">
                                <p>投标进度</p>
                                <div className="progress-box fl">
                                    <div className="progress dropdown">
                                        <div className="progressbar" style={{width:75+'%'}}></div>
                                        <span className="progresstext">75%</span>
                                    </div>
                                </div>
                            </li>
                            <li className="clearfix">
                                <p>还款方式</p>
                                <p>到期还本付息</p>
                            </li>
                            <li className="clearfix">
                                <p>起  息  日</p>
                                <p>T（成交日）+1</p>
                            </li>
                            <li className="clearfix">
                                <p>截止日期</p>
                                <p>2016-02-20</p>
                            </li>
                        </ul>
                    </div>
                    <div className="detail-source white dropdown">
                        <ul>
                            <li>
                                <a href="#" className="clearfix">
                                    <span>借款来源</span>
                                    <span>Mobvista汇量科技 <i></i></span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="clearfix">
                                    <span>公司审查员</span>
                                    <span>HR总监毕文超</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="clearfix">
                                    <span>风控顾问团</span>
                                    <span>毕文超、超文碧、张韦钰</span>
                                </a>
                            </li>
                        </ul>
                        <i></i>
                    </div>
                    <div className="detail-prove white">
                        <ul>
                            <li>
                                <Link to="/projectdetailinfo" className="clearfix">
                                    <i className="ico1"></i>
                                    <span>项目详情</span>
                                    <i></i>
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="clearfix">
                                    <i className="ico2"></i>
                                    <span>保障信息</span>
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="clearfix">
                                    <i className="ico3"></i>
                                    <span>证明文件图片</span>
                                    <i></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="clearfix">
                                    <i className="ico4"></i>
                                    <span>投资列表</span>
                                    <i></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <p><i className="ico5"></i>该理财标受福利汇风险保证金保障</p>
                </section>
                <footer className="white buy-now">
                    <a href="#" className="service"><i></i>客服</a>
                    <span onClick={ this._buyPrj }>立即购买</span>
                </footer>
            </div>
        );
    },

    _goBack: function(){
        browserHistory.goBack();
    },

    _buyPrj: function(){
        // 逻辑处理
        this.context.router.push('/buysuccess');
    },

});

module.exports = ProjectDetail;