import React from 'react';

import { Link, browserHistory } from 'react-router';

import Footer from './Footer.js'; 

const CollectLove = React.createClass({
    render: function(){
        return(
            <div>
                <header className="title">
                <span className="back" onClick={ this._goBack }></span>
                聚爱
                <a href="#" className="info"></a>
                </header>
                <section className="collect">
                    <ul>
                        <li className="white">
                            <header>儿子我来当你的大白<span>有米科技</span></header>
                            <div className="collect-mid clearfix">
                                <img src="../images/file/pic1.png" alt=""/>
                                <p>患朗格罕的小小男子汉需换肝，手术费用还差10万。</p>
                            </div>
                            <footer>
                                <ul className="collect-btm clearfix">
                                    <li>
                                        <i className="clt-money"></i>
                                        <span>4.8万元</span>
                                    </li>
                                    <li>
                                        <i className="clt-num"></i>
                                        <span>68次</span>
                                    </li>
                                    <li>
                                        <i className="collecting"></i>
                                        <span>筹集中</span>
                                    </li>
                                </ul>
                            </footer>
                        </li>
                        <li className="white">
                            <header>还孩子一个正常童年<span>爱拍原创</span></header>
                            <div className="collect-mid clearfix">
                                <img src="../images/file/pic1.png" alt=""/>
                                <p>熊梓凌身患白血病无法正常入学，请求大家帮助。</p>
                            </div>
                            <footer>
                                <ul className="collect-btm clearfix">
                                    <li>
                                        <i className="clt-money"></i>
                                        <span>9,000元</span>
                                    </li>
                                    <li>
                                        <i className="clt-num"></i>
                                        <span>28次</span>
                                    </li>
                                    <li>
                                        <i className="collecting"></i>
                                        <span>筹集中</span>
                                    </li>
                                </ul>
                            </footer>
                        </li>
                        
                    </ul>
                </section>
                <Footer name="home"/>
            </div>
        );
    },

    _goBack: function(){
        browserHistory.goBack();
    }
});

module.exports = CollectLove;