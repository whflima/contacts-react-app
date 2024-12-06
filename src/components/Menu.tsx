import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, ContactsOutlined, SettingOutlined } from '@ant-design/icons';
import { MenuListProps } from '../interfaces/interfaces';

export default function MenuList({ darkTheme }: MenuListProps) {
    return (
        <Menu theme={darkTheme ? "dark" : "light"} mode="inline" className="menu-bar">
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