import { useState } from 'react';
import Logo from './Logo';
import MenuList from './Menu';
import useIsMobile from './useIsMobile';
import { Layout, MenuTheme } from 'antd';
import styled from 'styled-components';
import { useThemeProvider } from './ThemeProvider';

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
  const [collapsed, setCollapsed] = useState(false);

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
