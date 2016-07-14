import React from 'react';
import { Link, IndexLink } from 'react-router';
import classNames from 'classNames'; // join classnames together

const Footer = React.createClass({

    render: function(){

        return (
             <footer className="f-nav white">
                <ul className="clearfix">
                    <li className={classNames({
                        'home': true,
                        'active': this.props.name == 'home'?'true':''
                    })}>
                        <i></i>
                        <p>首页</p>
                        <IndexLink  to='/'></IndexLink >
                    </li>
                    <li className={classNames({
                        'product': true,
                        'active': this.props.name == 'productlist'?'true':''
                    })}>
                        <i></i>
                        <p>产品</p>
                        <Link to='/productlist'></Link>
                    </li>
                    
                     <li className={classNames({
                        'mine': true,
                        'active': this.props.name == 'mine'?'true':''
                    })}>
                        <i></i>
                        <p>我</p>
                        <Link to='/mine'></Link>
                    </li>
                </ul>
            </footer>
        );
    },
});

module.exports = Footer;