import React from 'react';
import { Button } from 'antd';
import useIsMobile from '../utils/useIsMobile';
import { useCollapsedProvider } from '../providers/CollapsedProvider';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

export default function ToggleCollapsedButton() {
  const isMobile = useIsMobile();
  const { collapsed, changeCollapsed } = useCollapsedProvider();
  const style = isMobile ? { display: 'none' } : {};
  const icon = collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />;

  return (
    <Button
      style={style}
      type="text"
      className="toggle"
      onClick={changeCollapsed}
      icon={icon}
    />
  );
}
