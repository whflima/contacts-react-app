import React from 'react';
import { Button } from 'antd';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import { useThemeProvider } from '../providers/ThemeProvider';

export default function ToggleThemeButton() {
  const { isThemeDark, changeTheme } = useThemeProvider();
  const icon = isThemeDark ? <HiOutlineSun /> : <HiOutlineMoon />;

  return <Button icon={icon} shape="circle" onClick={changeTheme} />;
}
