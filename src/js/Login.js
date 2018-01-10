import React, { Component } from 'react';
import { fetchFn } from '../modules/fetchdata.js';
import { message } from 'antd';
import PropTypes from 'prop-types';

import RegisterSub from './Register'

export default class Login extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            visible: false,
        }                       
    }

    //接收自组件传来的值并更改state
    transferShow(isShow){
        if(isShow === true || isShow === false){
            this.setState({
                visible:isShow
            })
        }
        return this.state.visible;
    }

    // 路由跳转配置
    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    loginFn = () => {
        let userName = this.refs.userName.value;
        let passWord = this.refs.passWord.value;
        if( userName === "" || passWord === "" ){
            message.warning('用户名或密码不能为空');
            return;
        }
        
        fetchFn({
            method:'POST',
            url:'/login',
            params:{
                'userName':userName,
                'passWord':passWord
            },
            successFn:function(data,_this){
                //console.log(data);
                if(data.code === '000000'){
                    console.log('登录成功');
                    var localInfo = {
                        'userName':userName,
                        'passWord':passWord
                    }
                    localStorage.setItem('trivalmonsterBlog',JSON.stringify(localInfo));
                    _this.context.router.history.push("/homepage");
                } else {
                    message.error(data.message);
                }
                
            }
        },this);
    }

    registerFn = () => {
        this.setState({
            visible: true,
        });
    }

    render() {
        return (
            <div  className="appContainer loginContainer">
                <div className="username">
                    <input ref="userName" type="text" placeholder="用户名" name="userName" />
                </div>
                <div className="password">
                    <input ref="passWord" type="password" placeholder="密码" name="passWord" />
                </div>
                <div className="submit">
                    <input  type="submit" value="登录" onClick={this.loginFn} />
                    <input  type="submit" value="注册" onClick={this.registerFn} />
                </div>

                <RegisterSub transferShow = {isShow => this.transferShow(isShow)} />
            </div>
        );
    }
}
