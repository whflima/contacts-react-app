import { Menu, MenuTheme } from 'antd';
import { HomeOutlined, ContactsOutlined, SettingOutlined } from '@ant-design/icons';
import { useThemeProvider } from './ThemeProvider';

export default function MenuList() {
    const { theme } = useThemeProvider();

    return (
        <Menu theme={theme as MenuTheme} mode="inline" className="menu-bar">
            <Menu.Item key="home" icon={<HomeOutlined />} disabled>
                Home
            </Menu.Item>
            <Menu.Item key="contacts" icon={<ContactsOutlined />}>
                Contacts
            </Menu.Item>
            <Menu.Item key="setting" icon={<SettingOutlined />} disabled>
                Setting
            </Menu.Item>
        </Menu>
    );
};