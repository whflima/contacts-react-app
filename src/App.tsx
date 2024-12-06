import React, { useState } from 'react';
import './App.css';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';
import { Button, Col, Layout, Row, theme } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import Logo from './components/Logo';
import MenuList from './components/Menu';
import ToggleThemeButton from './components/ToggleThemeButton';
import SimpleGrid from './components/SimpleGrid';
import { Content } from 'antd/es/layout/layout';

const { Header, Sider } = Layout;

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  }

  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        collapsed={window.innerWidth < 400 ? true : collapsed}
        collapsible trigger={null}
        theme={darkTheme ? "dark" : "light"} className="sidebar">
        <Logo />
        <MenuList darkTheme={darkTheme} />
        <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text" className="toggle"
            onClick={() => setCollapsed(!collapsed)} icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <SimpleGrid />
        </Content>
      </Layout>
    </Layout>
  );
}