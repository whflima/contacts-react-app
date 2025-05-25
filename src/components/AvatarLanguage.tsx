import React from 'react';
import { Avatar, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { AvatarLanguageProps } from '../interfaces/interfaces';

export default function AvatarLanguage(props: AvatarLanguageProps) {
  const { t } = useTranslation();

  return (
    <Space size={10} wrap>
      <Avatar gap={4} src={props.image} />
      {t(props.expression)}
    </Space>
  );
}
