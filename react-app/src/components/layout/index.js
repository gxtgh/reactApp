import React, { Component } from 'react';
import { Layout, Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import './index.css'
const { Header,  Sider, Content } = Layout;
const { SubMenu } = Menu;
class index extends Component {
  state = {
    collapsed: false,
  };
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
    render() {
        return (
            <Layout className="r-layout">
                <Sider className="r-sider" collapsed={this.state.collapsed}>
                    <div className="r-logo">logo
                    </div>
                    <Menu 
                      defaultSelectedKeys={['1']}
                      mode="inline"
                    >
                        <Menu.Item key="1" icon={<PieChartOutlined />}>Option 1</Menu.Item>
                        <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                          <Menu.Item key="5">Option 2</Menu.Item>
                          <Menu.Item key="6">Option 3</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="r-header">
                      
                    <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                      {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                    </Button>
                      Header
                    </Header>
                    <Content>Content</Content>
                    {/* <Footer>Footer</Footer> */}
                </Layout>
            </Layout>
        );
    }
}
export default index;