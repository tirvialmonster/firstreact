import React, { Component } from 'react';
import { fetchFn } from '../../modules/fetchdata.js';
import { message, Modal } from 'antd';
import PropTypes from 'prop-types';

export default class Login extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            confirmLoading:false
        }
    }

    // 路由跳转配置
    static contextTypes = {
        router: PropTypes.object.isRequired
    };


    handleOk = () => {
        
        let userName = this.refs.userName.value;
        let passWord = this.refs.passWord.value;
        if( userName === "" || passWord === "" ){
            message.warning('用户名或密码不能为空');
            return;
        }
        if(this.refs.passWordAgain.value !== passWord){
            message.warning('两次密码不一致');
            return;
        }
        this.setState({ confirmLoading: true });
        fetchFn({
            method:'POST',
            url:'/register',
            params:{
                'userName':userName,
                'passWord':passWord
            },
            successFn:function(data,_this){
                if(data.code === '000000'){
                    console.log('注册成功');
                    _this.setState({ confirmLoading: false });
                    _this.context.router.history.push("/homepage");
                } else {
                    _this.setState({ confirmLoading: false });
                    message.error(data.message);
                } 
            }
        },this);
    }
    handleCancel = () => {
        this.props.transferShow(false)
    }

    render() {
        const { confirmLoading } = this.state;
       
        return (
            <div  className="">
                <Modal  title="用户注册"
                        visible={this.props.transferShow()}
                        okText="注册"
                        onOk={this.handleOk}
                        confirmLoading={confirmLoading}
                        onCancel={this.handleCancel} >
                    <div  className="loginContainer">
                        <div className="username">
                            <input ref="userName" type="text" placeholder="用户名" name="userName" />
                        </div>
                        <div className="password">
                            <input ref="passWord" type="password" placeholder="密码" name="passWord" />
                        </div>
                        <div className="password">
                            <input ref="passWordAgain" type="password" placeholder="重复密码" name="passWordAgain" />
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}
