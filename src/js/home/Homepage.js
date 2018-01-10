import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout, Icon } from 'antd';

import NavSub from './NavSub';
import TopnavSub from './Topnav';
import Personalpage from './Personalpage';

const { Header, Sider, Content } = Layout;

export default class Homepage extends Component {
	constructor(props, context) {
		super(props, context);
        this.state={
            collapsed: false
        }   
	}

    
    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    }
   

    componentWillMount(){
    	if(!localStorage.trivalmonsterBlog){
        	this.context.router.history.push("/"); 
        } 
    }

    // 路由跳转配置
    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    render() {
        return (
            <div className="app homepage">
                <Layout style={{height:'100%'}}>
                    <Sider  
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed} style={{height:'100%'}}
                    >
                       <NavSub />
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }}>
                            <Icon   className="trigger"
                                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                    onClick={this.toggle} />
                        </Header>
                        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                            <div>Content</div>
                        </Content>
                    </Layout>
                </Layout>
                
               
            </div>
            
        );
    }
}
