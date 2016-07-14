import React from 'react';


const PrjIntroduce = React.createClass({
    render: function(){
        return (
             <div className="">
                <div className="prj-detail">
                    <div className="prj-detail-item">
                        <h2 className="prj-item-title">用户信息</h2>
                        <ul className="prj-base-list">
                            <li><span>学历</span>高中</li>
                            <li><span>部门</span>广告二部</li>
                            <li><span>借款用途</span>装修</li>
                            <li><span>婚姻状态</span>未婚</li>
                            <li><span>月收入</span>一万八至二万元</li>
                            <li><span>房产</span>无</li>
                            <li><span>车产</span>无</li>
                        </ul>
                    </div>

                    <div className="prj-detail-item">
                        <h2 className="prj-item-title">担保人信息</h2>
                        <p className="prj-guarantor-msg"></p>
                    </div>

                    <div className="prj-detail-item">
                        <h2 className="prj-item-title">审核内容</h2>
                        <ul className="prj-check-item">
                            <li className="prj-check-list clearfix">
                                <h3>信用报告</h3>
                                <div className="prj-check-state">
                                    <p>通过</p>
                                    <p>2016-06-27</p>
                                </div>
                            </li>
                            <li className="prj-check-list clearfix">
                                <h3>身份认证</h3>
                                <div className="prj-check-state">
                                    <p>通过</p>
                                    <p>2016-06-27</p>
                                </div>
                            </li>
                            <li className="prj-check-list clearfix">
                                <h3>工作认证</h3>
                                <div className="prj-check-state">
                                    <p>通过</p>
                                    <p>2016-06-27</p>
                                </div>
                            </li>
                            <li className="prj-check-list clearfix">
                                <h3>收入认证</h3>
                                <div className="prj-check-state">
                                    <p>通过</p>
                                    <p>2016-06-27</p>
                                </div>
                            </li>
                            <li className="prj-check-list clearfix">
                                <h3>企业认证</h3>
                                <div className="prj-check-state">
                                    <p>通过</p>
                                    <p>2016-06-27</p>
                                </div>
                            </li>
                            <li className="prj-check-list clearfix">
                                <h3>担保人认证</h3>
                                <div className="prj-check-state">
                                    <p>通过</p>
                                    <p>2016-06-27</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="prj-detail-item">
                        <h2 className="prj-item-title">审核意见</h2>
                        <ul>

                            <li className="prj-opinion-list">
                                <h3>Mobvista HR 明芳</h3>
                                <div>
                                    <div className="prj-opinoin-img">
                                        <img src="../../images/ico_HR.png"  width="80" height="80" />
                                    </div>
                                    <div className="prj-opinoin-text">
                                        该员工身份信息、工作信息、薪酬信息与公司登记一致
                                    </div>
                                </div>
                            </li>

                            <li className="prj-opinion-list">
                                <h3>风控总监黎志明</h3>
                                <div>
                                    <div className="prj-opinoin-img">
                                        <img src="../../images/ico_center.png" alt="" />
                                    </div>
                                    <div className="prj-opinoin-text">
                                        积分第三你是发错没掉每个电脑上分第三你是发错没掉每个电脑上分第三你是发错没掉每个电脑上分第三你是发错没掉每个电脑上分第三你是发错没掉每个电脑上分第三你是发错没掉每个电脑上分第三你是发错没掉每个电脑上凡客大赛分单位发恐怕看来而且啊发送到惹我发
                                    </div>
                                </div>
                            </li>

                            <li className="prj-opinion-list">
                                <h3>福利金融风控监督顾问团</h3>
                                <p className="prj-team-title">(由各行业资深投资人组成)</p>

                                <div className="prj-opinoin-detail">
                                    <div className="prj-opinoin-img">
                                        <img src="../../images/ico_default.png" alt="" />
                                    </div>
                                    <div className="prj-opinoin-text">

                                    </div>
                                </div>

                            </li>

                        </ul>
                    </div>

                </div>
            </div>
        )
    }
});

const GuaranteeInfo = React.createClass({
    render: function(){
        return (
             <div className="">
                <ul className="prj-security-item">

                    <li>
                        <div className="clearfix">
                            <span className="prj-security-item-num">1</span>
                            <h2 className="prj-security-item-title">本次借款由保证人担保，若逾期未还将由保证人承担偿还责任</h2>
                        </div>
                        <div className="prj-security-item-state">
                            借款人的，作为本次借款人的保证人，提供连带担保责任。若借款人发生严重还款逾期，出借人/本平台可直接追究保证人责任，要求保证人代偿逾期借款。
                        </div>
                    </li>
                    <li>
                        <div className="clearfix">
                            <span className="prj-security-item-num">2</span>
                            <h2 className="prj-security-item-title">本次借款由保证人担保，若逾期未还将由保证人承担偿还责任</h2>
                        </div>
                        <div className="prj-security-item-state">借款人所在公司承诺借款人信息与自行收集的信息一致，如果借款人所在公司违约，遭受损失的各方可向借款人所在公司要求赔偿。<br />借款人所在公司审核的信息包括：借款人真实身份、在职状态、薪酬收入、借款是否为本人真实意愿等信息。</div>
                    </li>
                    <li>
                        <div className="clearfix">
                            <span className="prj-security-item-num">3</span>
                            <h2 className="prj-security-item-title">本次借款由还款保证金提供本息保障</h2>
                        </div>

                        <div className="prj-security-item-state">
                            借款人已缴纳还款保证金，可执行逾期还款赔付。
                        </div>
                    </li>
                    <li>
                        <div className="clearfix">
                            <span className="prj-security-item-num">4</span>
                            <h2 className="prj-security-item-title">本次借款由易法客提供全程法律监护</h2>
                        </div>
                        <div className="prj-security-item-state">
                            易法客（www.yifake.com）负责全程的法律监督，审核借款协议的合法性，保障出借人收益。
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
});

const Files = React.createClass({
    render: function(){
        return (
             <div className="">
                <ul className="prj-file">
                    <li>
                        <div className="prj-file-img">
                            <img src="" alt="" />
                        </div>
                        <div className="clearfix">
                            <span className="prj-security-item-num">1</span>
                            <div className="prj-file-state">
                                <h2>借款人名下房产证</h2>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
});

const InvestList = React.createClass({
    render: function(){
        return (
             <div className="join">
                <div className="leader">
                    <div className="leader-pic"><img src="../../images/leader.png" /></div>
                    <div className="leader-info">
                        <h2><span>小南</span><small>领投人</small></h2>
                        <p>领投金额：<span>10000元</span></p>
                        <div>
                            点评：
                            <p>个他提完他为人突然安慰个案合塔尔让他挖个</p>
                        </div>
                    </div>
                </div>

                <ul className="join-thead clearfix">
                    <li>序号</li>
                    <li>投资人</li>
                    <li>投资金额</li>
                    <li>投资时间</li>
                </ul>

                <ul className="join-td clearfix">
                    <li>
                        <p>00289</p>
                    </li>
                    <li>
                        <p>
                            <span>发大水</span>
                        </p>
                    </li>
                    <li><p>10000.00</p></li>
                    <li className="time">2015-06-23<br />23:50:20</li>
                </ul>
               
            </div>
        )
    }
});

const ProjectDetailInfo = React.createClass({
    render: function(){
        return (
            <div>
                <header className="title"><a className="back" href="#"></a>涨薪宝20151225001第2期</header>
                <section>
                    <ul id="top_nav" className="top-nav">
                        <li className="select">项目介绍</li>
                        <li>保障信息</li>
                        <li>相关文件</li>
                        <li>投资列表</li>
                    </ul>
                   
                   <InvestList />
                   
                   
                </section>
            </div>
        )
}
});

module.exports = ProjectDetailInfo;
