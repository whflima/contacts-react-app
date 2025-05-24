import { Button } from 'antd';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import { ToggleThemeButtonProps } from '../interfaces/interfaces';
import useIsMobile from './useIsMobile';

export default function ToggleThemeButton({
  darkTheme,
  setToggleTheme,
}: ToggleThemeButtonProps) {
  const isMobile = useIsMobile();
  const className = isMobile
    ? 'toggle-theme-button-mobile'
    : 'toggle-theme-button';

  return (
    <Button onClick={setToggleTheme} className={className}>
      {darkTheme ? <HiOutlineSun /> : <HiOutlineMoon />}
    </Button>
  );
}
