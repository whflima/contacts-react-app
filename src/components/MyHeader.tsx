import React from 'react';
import { theme, Space } from 'antd';
import { Header } from 'antd/es/layout/layout';
import DropDownLanguage from './DropDownLanguage';
import ToggleCollapsedButton from './ToggleCollapsedButton';
import ToggleThemeButton from './ToggleThemeButton';
import useIsMobile from '../utils/useIsMobile';

export default function MyHeader() {
  const isMobile = useIsMobile();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Header
      style={{
        display: 'flex',
        justifyContent: isMobile ? 'flex-end' : 'space-between',
        alignItems: 'center',
        padding: 0,
        background: colorBgContainer,
      }}
    >
      <ToggleCollapsedButton />
      <Space align="center" style={{ marginRight: '20px' }} size={16} wrap>
        <DropDownLanguage />
        <ToggleThemeButton />
      </Space>
    </Header>
  );
}
