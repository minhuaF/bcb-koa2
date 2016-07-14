import React from 'react';

const WelfareRule = React.createClass({
    
    getInitialState: function(){
        return {
            isShowRule: this.props.isShowRule
        }
    },

    componentWillReceiveProps: function(nextProps){
        this.setState({
            isShowRule: nextProps.isShowRule
        })
    },

    render: function(){

        if( this.state.isShowRule == 'false' ){
            return null;
        }

        return (
            <div className="rule" onClick={ this._hideRule }>
                <div className="rule-content dropdown">
                    <i></i>
                    <h2>活动规则 </h2>
                    <p>1.所有福利金融用户登录后可领福利</p>
                    <p>2.领福利时间为每日 06:00~22:00</p>
                    <p>3.加息券可用于所有可投标，有效期为1天</p>
                    <p>4.用户每天有一次机会参与活动</p>
                    <p>*本次活动最终解释权归福利金融所有</p>
                </div>
            </div>
        )
    },

    _hideRule: function(){
        this.setState({
            isShowRule: 'false'
        })
    }
});

module.exports = WelfareRule;