import { Button } from 'antd';
import { ToggleCollapsedButtonProps } from '../interfaces/interfaces';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import useIsMobile from './useIsMobile';

export default function ToggleCollapsedButton({
  collapsed,
  setCollapsed,
}: ToggleCollapsedButtonProps) {
  const isMobile = useIsMobile();
  const style = isMobile ? { display: 'none' } : {};
  const icon = collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />;

  return (
    <Button
      style={style}
      type="text"
      className="toggle"
      onClick={setCollapsed}
      icon={icon}
    />
  );
}
