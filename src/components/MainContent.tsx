import React from 'react';
import { theme } from 'antd';
import { Content } from 'antd/es/layout/layout';
import SimpleGrid from './SimpleAgGridReact';

export default function MainContent() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
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
  );
}
