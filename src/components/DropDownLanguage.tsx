import React from 'react';
import { Avatar, Dropdown, MenuProps } from 'antd';
import { useTranslation } from 'react-i18next';
import AvatarLanguage from './AvatarLanguage';
import { useLanguageProvider } from '../providers/LanguageProvider';

export default function DropDownLanguage() {
  const { t } = useTranslation();
  const { changeLanguage } = useLanguageProvider();

  const languages = [
    {
      key: 'en',
      img: './australia-flag.svg',
      expression: 'language.switcher.items-english',
    },
    {
      key: 'es',
      img: './spain-flag.svg',
      expression: 'language.switcher.items-spanish',
    },
    {
      key: 'pt-br',
      img: './brazil-flag.svg',
      expression: 'language.switcher.items-portuguese',
    },
  ];

  const items: MenuProps['items'] = languages.map(
    ({ key, img, expression }) => ({
      key,
      label: (
        <a onClick={() => changeLanguage(key)}>
          <AvatarLanguage
            key={key}
            image={img}
            expression={expression}
          />
        </a>
      ),
    }),
  );
  
  return (
    <Dropdown menu={{ items }} placement="bottom" arrow>
      <Avatar src={t('language.switcher.flag')} />
    </Dropdown>
  );
}
