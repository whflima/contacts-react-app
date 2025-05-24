import { useState } from 'react';
import Logo from './Logo';
import MenuList from './Menu';
import useIsMobile from '../utils/useIsMobile';
import { Layout, MenuTheme } from 'antd';
import styled from 'styled-components';
import { useThemeProvider } from '../providers/ThemeProvider';
import { useCollapsedProvider } from '../providers/CollapsedProvider';

const { Sider } = Layout;

const CustomSider = styled(Sider)`
  width: 60px !important;
  max-width: 60px !important;
  min-width: 60px !important;
  flex: 0 0 60px !important;
`;

export default function SideBar() {
  const isMobile = useIsMobile();
  const { theme } = useThemeProvider();
  const { collapsed } = useCollapsedProvider();

  const handleSideBarItems = () => {
    return (
      <>
        <Logo />
        <MenuList />
      </>
    );
  };

  const handleSideBar = () => {
    if (isMobile) {
      return (
        <CustomSider
          collapsed={isMobile ? true : collapsed}
          collapsible
          trigger={null}
          theme={theme}
          className="sidebar"
        >
          {handleSideBarItems()}
        </CustomSider>
      );
    }
    return (
      <Sider
        collapsed={isMobile ? true : collapsed}
        collapsible
        trigger={null}
        theme={theme as MenuTheme}
        className="sidebar"
      >
        {handleSideBarItems()}
      </Sider>
    );
  };

  return handleSideBar();
}
