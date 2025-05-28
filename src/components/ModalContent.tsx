import Map from './Map';
import { Divider, Descriptions } from 'antd';
import { ModalContentProps } from '../interfaces/interfaces';
import { useTranslation } from 'react-i18next';

export default function ModalContent({ contentData }: ModalContentProps) {
  const { t } = useTranslation();
  return (
    <>
      {contentData && (
        <div className="contact">
          <div className="contact-info">
            <Descriptions layout="vertical">
              <Descriptions.Item label={t('simple-grid.collumn-name')}>{contentData.name}</Descriptions.Item>
              <Descriptions.Item label={t('simple-grid.collumn-username')}>{contentData.username}</Descriptions.Item>
              <Descriptions.Item label={t('simple-grid.collumn-email')}>{contentData.email}</Descriptions.Item>
              <Descriptions.Item label={t('simple-grid.collumn-phone')}>{contentData.phone}</Descriptions.Item>
              <Descriptions.Item label={t('simple-grid.collumn-website')}>{contentData.website}</Descriptions.Item>
            </Descriptions>
          </div>

          <div className="contact-company">
            <Divider orientation="left" orientationMargin="0" style={{borderColor: "rgba(28, 17, 41, 0.88)"}}>{t('simple-grid.collumn-company')}</Divider>
            <Descriptions layout="vertical">
              <Descriptions.Item label={t('simple-grid.collumn-company.name')}>{contentData.company.name} </Descriptions.Item>
              <Descriptions.Item label={t('simple-grid.collumn-company.phrase')}>{contentData.company.catchPhrase} </Descriptions.Item>
              <Descriptions.Item label={t('simple-grid.collumn-company.bs')}>{contentData.company.bs} </Descriptions.Item>
            </Descriptions>
          </div>

          <div className="contact-address">
            <Divider orientation="left" orientationMargin="0" style={{borderColor: "rgba(28, 17, 41, 0.88)"}}>{t('simple-grid.collumn-address')}</Divider>
            <Descriptions layout="vertical">
              <Descriptions.Item label={t('simple-grid.collumn-address.street')}>{contentData.address.street} </Descriptions.Item>
              <Descriptions.Item label={t('simple-grid.collumn-address.suite')}>{contentData.address.suite} </Descriptions.Item>
              <Descriptions.Item label={t('simple-grid.collumn-address.city')}>{contentData.address.city} </Descriptions.Item>
              <Descriptions.Item label={t('simple-grid.collumn-address.zipcode')}>{contentData.address.zipcode} </Descriptions.Item>
            </Descriptions>
          </div>

          <div className="contact-map">
            <Map latitude={-33.8397011} longitude={151.2057175} />
          </div>
        </div>
      )}
    </>
  );
};