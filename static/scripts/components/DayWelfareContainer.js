import DayWelfareBefore from './DayWelfareBefore.js';
import DayWelfareStart from './DayWelfareStart.js';
import DayWelfareAfter from './DayWelfareAfter.js';
import DayWelfareUtil from '../utils/DayWelfareUtil.js';

import React from 'react';
import { Link, browserHistory } from 'react-router';

const DayWelfare = React.createClass({

    statics: {
        loadProps: function(params, cb){
            DayWelfareUtil.getData(function(res){
                cb(null, {
                    state: res.state
                });
            });
        }
    },

    getInitialState: function(){
        return {
            state: this.props.state
        }
    },

    render: function(){

        var Child = null;

        switch( this.state.state ){
            case 1 : Child = <DayWelfareBefore />; break;
            case 2 : Child = <DayWelfareStart />; break;
            case 3 : Child = <DayWelfareAfter />; break;
            default: '';
        }

        return (
            <div>
                <header className="title">
                    <span className="back" onClick={ this._goBack }></span>
                    每日福利
                </header>
                {Child}
            </div>
        )
    },

    _goBack: function(){
        browserHistory.goBack();
        console.log("-----"+ JSON.parse(browserHistory));
    },

});

module.exports = DayWelfare;