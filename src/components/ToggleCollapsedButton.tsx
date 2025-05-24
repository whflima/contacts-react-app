import { Button } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import useIsMobile from './useIsMobile';
import { useCollapsedProvider } from './CollapsedProvider';

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
