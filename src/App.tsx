import React from 'react';
import './App.css';
import { Layout, Space, theme } from 'antd';
import ToggleThemeButton from './components/ToggleThemeButton';
import SimpleGrid from './components/SimpleAgGridReact';
import { Content, Header } from 'antd/es/layout/layout';
import ToggleCollapsedButton from './components/ToggleCollapsedButton';
import SideBar from './components/SideBar';
import DropDownLanguage from './components/DropDownLanguage';

export default function App() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <SideBar />
      <Layout>
        <Header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <ToggleCollapsedButton />
          <Space align="center" size={16} wrap>
            <DropDownLanguage />
            <ToggleThemeButton />
          </Space>
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
