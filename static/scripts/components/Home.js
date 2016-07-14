import React from 'react';
import { Link } from 'react-router';
import Footer from './Footer.js';


// 无状态组件 首页的无状态是暂时的
const Home = React.createClass({
    render: function(){
        return (
            <div style={{marginTop: -93 + 'px'}}>
                <Link to="/signin"><header className="home-banner"></header></Link>
                <section className="home-item white">
                    <ul className="clearfix">
                        <li className="ico-welfare">
                            <Link to='/daywelfare'></Link>
                            <p>每日福利</p>
                        </li>
                        <li className="ico-college">
                            <a href="#"></a>
                            <p>理财学院</p>
                        </li>
                        <li className="ico-safe">
                            <Link to='/security'></Link>
                            <p>安全保障</p>
                        </li>
                        <li className="ico-love">
                            <Link to='/collectlove'></Link>
                            <p>聚爱</p>
                        </li>
                    </ul>
                </section>
                <section className="notice white clearfix">
                    <i></i>
                    <p>陈**投资了<span>1000元</span>，黄**投资了<span>200元</span>，叶88投资fdsafsd</p>
                    <b></b>
                </section>
                <section className="project">
                    <h2>精品项目</h2>
                    <ul className="prt-list">
                        <li className="white dropdown">
                            <header>
                                <h3>新手标 201507090701</h3>
                                <span>本息保障</span>
                            </header>
                            <div className="dropdown clearfix">
                                <section>
                                    <p>8.0<span>+0.5</span></p>
                                    <p>年化收益率(%)</p>
                                </section>
                                <table>
                                    <tbody><tr>
                                        <td>期限</td>
                                        <td>1天</td>
                                    </tr>
                                    <tr>
                                        <td>可投</td>
                                        <td>987,3895元</td>
                                    </tr>
                                    <tr>
                                        <td>进度</td>
                                        <td className="progress-box">
                                            <div className="progress dropdown">
                                                <div className="progressbar" style={{width:'100%;'}}></div>
                                                <span className="progresstext">售罄</span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody></table>
                            </div>
                            <a href="#"></a>
                        </li>
                        <li className="white dropdown">
                            <header>
                                <h3>新标预告 201507090701</h3>
                                <span>本息保障</span>
                            </header>
                            <div className="dropdown clearfix">
                                <section>
                                    <p>8.0</p>
                                    <p>年化收益率(%)</p>
                                </section>
                                <a href="#" className="btn-reserve">立即预约</a>
                            </div>
                            <a href="#"></a>
                        </li>
                        <li className="white dropdown">
                            <header>
                                <h3>新标预告 201507090701</h3>
                                <span>本息保障</span>
                            </header>
                            <div className="dropdown clearfix">
                                <section>
                                    <p>8.0</p>
                                    <p>年化收益率(%)</p>
                                </section>
                                <a href="#" className="btn-reserve btn-already">已预约</a>
                            </div>
                            <a href="#"></a>
                        </li>
                        <li className="white dropdown">
                            <header>
                                <h3>新手标 201507090701</h3>
                                <span>本息保障</span>
                            </header>
                            <div className="dropdown clearfix">
                                <section>
                                    <p>8.0<span>+0.5</span></p>
                                    <p>年化收益率(%)</p>
                                </section>

                                <p className="rookie"></p>
                                <table>
                                    <tbody><tr>
                                        <td>期限</td>
                                        <td>1天</td>
                                    </tr>
                                    <tr>
                                        <td>可投</td>
                                        <td>987,3895元</td>
                                    </tr>
                                    <tr>
                                        <td>进度</td>
                                        <td className="progress-box">
                                            <div className="progress dropdown">
                                                <div className="progressbar" style={{width:'75%;'}}></div>
                                                <span className="progresstext">75%</span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody></table>
                            </div>
                            <a href="#"></a>
                        </li>
                    </ul>
                </section>
                <Footer name="home"/>
            </div>
        );
    }
});

module.exports = Home;