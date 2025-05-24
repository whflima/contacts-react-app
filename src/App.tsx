import { useState } from 'react';
import './App.css';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';
import { Layout, theme } from 'antd';
import ToggleThemeButton from './components/ToggleThemeButton';
import SimpleGrid from './components/SimpleGrid';
import { Content } from 'antd/es/layout/layout';
import ToggleCollapsedButton from './components/ToggleCollapsedButton';
import SideBar from './components/SideBar';

const { Header, Sider } = Layout;

export default function App() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

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
          <ToggleCollapsedButton collapsed setCollapsed={toggleCollapsed} />
          <ToggleThemeButton />
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