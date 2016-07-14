import React from 'react';

const TipsMessage = React.createClass({

    getInitialState: function(){
        return {
            isShow: true
        }
    },


    render: function(){

        if(!this.state.isShow || !this.props.error || this.props.error.trim() === ''){
            return null;
        }

        return (
            <div className="intro-tips">
                <div className="tips-content">
                    <h4>提示</h4>
                    <p>{ this.props.error }</p>
                    <button onClick={ this._hidePopup }>确定</button>
                </div>
            </div>
        )
    },

    _hidePopup: function(){
        this.setState({
            isShow: false
        });
    },
});

module.exports = TipsMessage;