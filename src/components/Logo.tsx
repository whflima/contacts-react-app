import React from 'react';
import { FireFilled } from '@ant-design/icons';
import { useThemeProvider } from '../providers/ThemeProvider';

export default function Logo() {
  const { isThemeDark } = useThemeProvider();
  const style = isThemeDark
    ? { backgroundColor: 'rgb(20, 20, 20)' }
    : { backgroundColor: 'rgb(255, 255, 255)' };

  return (
    <div className="logo" style={style}>
      <div className="logo-icon">
        <FireFilled></FireFilled>
      </div>
    </div>
  );
}
