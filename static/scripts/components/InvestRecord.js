import React from 'react';
import { Link, browserHistory } from 'react-router';

const InvestRecord = React.createClass({
    render: function(){
        return (
            <div>
                <header className="title">
                <span className="back" onClick={ this._goBack }></span>
                投资记录</header>
                <section className="investhistory-content">
                    <header className="detail-rate clearfix">
                       <ul className="clearfix">
                           <li>
                               <span>累计总额(元)</span>
                               <p>37000.00</p>
                           </li>
                           <li>
                               <span>累计收益(元)</span>
                               <p>9.08</p>
                           </li>
                       </ul>
                    </header>
                    <div className="ih-detail white">
                       <ul>
                            <li>
                                <p className="ih-time">2016年03月23日</p>
                                <ul className="ih-item">
                                    <li>
                                        <p>体验标1602025214</p>
                                        <p>156.00元</p>
                                        <span>购买成功</span>
                                    </li>
                                    <li>
                                        <p>体验标1602025214</p>
                                        <p>156.00元</p>
                                        <span>购买成功</span>
                                    </li>
                                </ul>
                            </li>
                           <li>
                               <p className="ih-time">2016年08月23日</p>
                               <ul className="ih-item">
                                   <li>
                                       <p>体验标1486258525214</p>
                                       <p>1588.00元</p>
                                       <span>购买成功</span>
                                   </li>
                                   <li>
                                       <p>体验标1602025214</p>
                                       <p>156.00元</p>
                                       <span>购买成功</span>
                                   </li>
                                   <li>
                                       <p>体验标1486258525214</p>
                                       <p>1588.00元</p>
                                       <span>购买成功</span>
                                   </li>
                                   <li>
                                       <p>体验标1602025214</p>
                                       <p>156.00元</p>
                                       <span>购买成功</span>
                                   </li>
                               </ul>
                           </li>
                       </ul>
                    </div>
                    <div className="hide">
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

module.exports = InvestRecord;