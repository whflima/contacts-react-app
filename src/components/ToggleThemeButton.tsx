import { Button } from 'antd';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import useIsMobile from './useIsMobile';
import { useThemeProvider } from './ThemeProvider';

export default function ToggleThemeButton() {
  const { isThemeDark, changeTheme } = useThemeProvider();
  const isMobile = useIsMobile();
  const className = isMobile
    ? 'toggle-theme-button-mobile'
    : 'toggle-theme-button';

  return (
    <Button onClick={changeTheme} className={className}>
      {isThemeDark ? <HiOutlineSun /> : <HiOutlineMoon />}
    </Button>
  );
}
