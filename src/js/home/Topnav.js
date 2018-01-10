import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Nav extends Component {

    // 路由跳转配置
    static contextTypes = {
        router: PropTypes.object.isRequired
    };
	
	logoutFn = () => {
        this.context.router.history.push("/");
    }

    render() {
        return (
            <div className="topContainer">
                <div className="logo"></div>
                <ul className="nav">
                    
                    <li>个人主页</li>
                    

                </ul>
                <div className="logOut" onClick={this.logoutFn}>注销</div>
            </div>
        );
    }
}
