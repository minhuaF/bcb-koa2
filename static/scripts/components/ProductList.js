import React from 'react';
import { Link, browserHistory } from 'react-router';

import Footer from './Footer.js';
import ProjectListUtil from '../utils/ProjectListUtil.js';
import ProjectListItem from './ProductItem.js';

const ProductList = React.createClass({

    statics: {
        loadProps: function(params, cb){
            var q = {};
            q.status = params.params.status || '';
            ProjectListUtil.getData(function(res){
                cb(null, {
                    data: res.Result.Records[0].Name,
                    list: res.Result.Records
                });
            });
        }
    },

    contextTypes:{
        router: React.PropTypes.object.isRequired
    },

    getInitialState: function(){
        return {
            data: this.props.data,
            list: this.props.list
        };
    },

    // 在组件接收到一个新的prop时执行；在初始化render时不会被调用
    // 可作为react在prop传入之后，render()渲染之前更新state的机会，
    
    componentWillReceiveProps: function(nextProps){
       this.setState({
           list: nextProps.list
       });
    },

    render: function(){

        var status = this.props.params.status;
        if (!status) {
            status = '';
        }

        // map 方法会给原数组中的每个元素都按顺序调用一次callback函数。callback每次执行后的返回值组合起来形成一个新数组
        
        // this.props.todo 获取父组件传递过来的数据
        // { 遍历数据 }
        // JSX 展开属性 来合并现有的props和其他值
        
        var items = this.state.list.map(function(item, index){
           return (
              <ProjectListItem {...item} key={index} />
           )
        });

        return(
             <div>
                <header className="title">
                    <span className="back" onClick={ this._goBack }></span>
                    产品列表
                </header>
                <section className="project">
                    <ul className="prt-list">
                      {items}
                    </ul>
                </section>
                <div>点击加载更多</div>
                <Footer name="productlist"/>
             </div>
        );
    },

    _goBack: function(){
        browserHistory.goBack();
    }

});

module.exports = ProductList;