import React from 'react';
import { Link } from 'react-router';

import Footer from './Footer.js';
import ProjectListUtil from '../utils/ProjectListUtil.js';

const ProductListItem = React.createClass({
    render: function(){
        return(
            <li className="white dropdown">
                <header>
                    <h3>{this.props.Name}</h3>
                    <span>本息保障</span>
                </header>
                <div className="dropdown clearfix">
                    <section>
                        <p>
                            { this.props.Rate }
                        </p>
                        <p>年化收益率(%)</p>
                    </section>
                    <table>
                        <tbody>
                            <tr>
                                <td>期限</td>
                                <td>{this.props.Duration}个月</td>
                            </tr>
                            <tr>
                                <td>可投</td>
                                <td>{ this.props.AmountBalance }元</td>
                            </tr>
                            <tr>
                                <td>进度</td>
                                <td className="progress-box">
                                    <div className="progress dropdown">
                                        <div className="progressbar" style={{width: this.props.Process + '%'}}></div>
                                        <span className="progresstext">{ this.props.Process }%</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Link to="/projectdetail"></Link>
            </li>
    )}
});

module.exports = ProductListItem;