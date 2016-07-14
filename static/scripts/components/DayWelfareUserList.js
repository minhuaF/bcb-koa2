import React from 'react';

const UserList = React.createClass({
    render: function(){
        return (
            <div>
                <p className="mrfl-text">今天又143位用户获得加息</p>
                <div className="prize-winner">
                    <ul>
                        <li>让xx   刚刚领取了 +0.5%</li>
                        <li>叶xx   刚刚领取了 +0.1%</li>
                        <li>易xx   刚刚领取了 +0.2% </li>
                    </ul>
                </div>
            </div>
        )
    }
});

module.exports = UserList;