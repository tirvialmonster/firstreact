import React, { Component } from 'react';
import logo from '../images/logo.svg';
import Login from './home/Login';

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="appHeader">
                    <img src={logo} className="appLogo" alt="logo" />
                    <h3>@trivialmonster博客系统</h3>
                </div>
                <Login></Login>
            </div>
        );
    }
}
