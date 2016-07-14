
import "../zepto/zepto.min.js";
import "../zepto/touch.js";
import "../zepto/wap-security.js";

import styles from '../../css/security.css';

import React from 'react';
import { Link, browserHistory } from 'react-router';

const Security = React.createClass({
    render: function(){
        return (
            <div>
            <header className="title"><span className="back" onClick={ this._goBack }></span>安全保障</header>
                <div className="pages page-1-1 page-current" style={{marginTop: -93 + 'px'}}>
                    <div className="wrap pt-page-moveFromBottom">
                        <div className="page1-bg">
                            <div className="page1-center"></div>
                            <h2>福利金融安全防护体系</h2>
                            <p>— 更安全的网上理财体验 —</p>
                            <img src="../../images/arrow-anim.png" className="arrow pt-page-moveIconUp" />
                        </div>
                    </div>
                </div>
                <div className="pages page-2-1 hide" style={{marginTop: -93 + 'px'}}>
                    <div className="wrap pt-page-moveFromBottom">
                        <div className="page2-bg">
                            <h2>IT 精英专属的理财借款神器</h2>
                            <p>— 只借钱给签约互联网企业员工，靠谱！ —</p>
                            <ul>
                                <li className="elite">
                                    <i></i>
                                    <p>IT 精英</p>
                                    <span>100%服务于签约<br />IT 企业员工</span>
                                </li>
                                <li className="income">
                                    <i></i>
                                    <p>收入</p>
                                    <span>平均工资在<br />8000以上</span>
                                </li>
                                <li className="age">
                                    <i></i>
                                    <p>年龄</p>
                                    <span>75%的人在<br />22-35岁之间</span>
                                </li>
                                <li className="geolocation">
                                    <i></i>
                                    <p>地理位置</p>
                                    <span>全国25省<br />166个城市</span>
                                </li>
                            </ul>
                            <img src="../../images/arrow-anim.png" className="arrow pt-page-moveIconUp" />
                        </div>
                    </div>
                </div>
                <div className="pages page-3-1 hide " style={{marginTop: -93 + 'px'}}>
                    <div className="wrap pt-page-moveFromBottom">
                        <div className="page3-bg">
                            <h2>上市公司，知名资本战略入股</h2>
                            <p>— 首轮融资高达1000万 —</p>
                            <ul>
                                <li className="youmi">
                                    <i></i>
                                    <p>
                                        有米科技（股票代码：834156）是全球领先的综合性移动互联网企业，以中国首家移动广告平台起家。2015年11月成功挂牌新三板上市。
                                    </p>
                                </li>
                                <li className="qixing">
                                    <i></i>
                                    <p>
                                        七煋瓢虫基金，专注投资互联网金融领域。团队曾成功投资过金斧子、向日葵保险、天使客、分期X等知名互联网金融公司。
                                    </p>
                                </li>
                            </ul>
                            <img src="../../images/arrow-anim.png" className="arrow pt-page-moveIconUp" />
                        </div>
                    </div>
                </div>
                <div className="pages page-4-1 hide" style={{marginTop: -93 + 'px'}}>
                    <div className="wrap pt-page-moveFromBottom">
                        <div className="page4-bg">
                            <h2>灵鹰风控系统</h2>
                            <p>— 联合借款人用人单位、配合18重信审，让风险趋近于0 —</p>
                            <div className="balloon1"></div>
                            <div className="balloon2"></div>
                            <div className="balloon3"></div>
                            <div className="page4-bottom"></div>
                            <img src="../../images/arrow-anim.png" className="arrow pt-page-moveIconUp" />
                        </div>
                    </div>
                </div>
                <div className="pages page-5-1 hide" style={{marginTop: -93 + 'px'}}>
                    <div className="wrap pt-page-moveFromBottom">
                        <div className="page5-bg">
                            <h2>强大金融系统，安全堪比银行</h2>
                            <p>— 100%全方位保障资金安全 —</p>
                            <ul className="clearfix">
                                <li>
                                    <p>顶级研发</p>
                                    <p>团队</p>
                                </li>
                                <li>
                                    <p>阿里云</p>
                                    <p>服务部署</p>
                                </li>
                            </ul>
                            <span>银行安全级别<br />金融系统</span>
                            <ul className="clearfix">
                                <li>
                                    <p>自主研发</p>
                                    <p>系统</p>
                                </li>
                                <li>
                                    <p>全面</p>
                                    <p>隐私保护</p>
                                </li>
                            </ul>
                            <img src="../../images/arrow-anim.png" className="arrow pt-page-moveIconUp" />
                        </div>
                    </div>
                </div>
                <div className="pages page-6-1 hide" style={{marginTop: -93 + 'px'}}>
                    <div className="wrap pt-page-moveFromBottom">
                        <div className="page6-bg">
                            <h2>合法守规，值得信赖</h2>
                            <p>— 全程接受知名律师机构监督，放心！ —</p>
                            <div>
                                <i></i>
                                <p>福利金融法律顾问</p>
                            </div>
                            <ul>
                                <li>
                                    <h4>《合同法》</h4>
                                    <p>第二十三章“居间合同”中明确规定，居间人提供贷款合同订立的媒介服务，可依法向委托方收取相应的报酬。</p>
                                    <b></b>
                                    <i></i>
                                    <span></span>
                                </li>
                                <li>
                                    <h4>操作合法守规</h4>
                                    <p>福利金融借款操作流程、利率定价、借款撮合过程均由易法客进行合规性监督，确保操作过程合法守规。</p>
                                    <b></b>
                                    <i></i>
                                    <span></span>
                                </li>
                                <li>
                                    <h4>电子合同有效</h4>
                                    <p>福利金融借款服务协议、出借服务协议、债权转让协议均由易法客资深律师起草、审核，确保合法有效。</p>
                                    <b></b>
                                    <i></i>
                                    <span></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    },

    _goBack: function(){
        return browserHistory.goBack();
    },
});

module.exports = Security;