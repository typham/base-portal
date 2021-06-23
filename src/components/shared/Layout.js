import React from 'react';
import { Layout, Menu, Dropdown, Button, Space } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import {useState} from "react";
const { Header, Sider, Content } = Layout;

const FullLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggle = () => {
        setCollapsed(!collapsed);
    };

    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    Tài khoản của tôi
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    Thoát
                </a>
            </Menu.Item>
        </Menu>
    );

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo">
                    Base portal
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        nav 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                        nav 2
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                        nav 3
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    <div>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: toggle,
                        })}
                    </div>
                    <div>
                        <Space direction="vertical">
                            <Space wrap>
                                <Dropdown overlay={menu} placement="bottomCenter" className="top-menu-item">
                                    <div>Notifications</div>
                                </Dropdown>
                            </Space>
                        </Space>
                        <Space direction="vertical">
                            <Space wrap>
                                <Dropdown overlay={menu} placement="bottomCenter" className="top-menu-item">
                                    <div>Tý Phạm</div>
                                </Dropdown>
                            </Space>
                        </Space>
                    </div>
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    );
}

export default FullLayout;