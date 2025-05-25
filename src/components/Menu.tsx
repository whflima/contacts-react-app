import React from 'react';
import { Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import {
  HomeOutlined,
  ContactsOutlined,
  SettingOutlined,
} from '@ant-design/icons';

export default function MenuList() {
  const { t } = useTranslation();

  return (
    <Menu mode="inline" className="menu-bar">
      <Menu.Item key="home" icon={<HomeOutlined />} disabled>
        {t('menu.item-home')}
      </Menu.Item>
      <Menu.Item key="contacts" icon={<ContactsOutlined />}>
        {t('menu.item-contacts')}
      </Menu.Item>
      <Menu.Item key="setting" icon={<SettingOutlined />} disabled>
        {t('menu.item-setting')}
      </Menu.Item>
    </Menu>
  );
}
