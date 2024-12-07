import Map from './Map';
import { Divider, Descriptions } from 'antd';
import { ModalContentProps } from '../interfaces/interfaces';

export default function ModalContent({ contentData }: ModalContentProps) {
  return (
    <>
      {contentData && (
        <div className="contact">
          <div className="contact-info">
            <Descriptions layout="vertical">
              <Descriptions.Item label="Name">{contentData.name}</Descriptions.Item>
              <Descriptions.Item label="Username">{contentData.username}</Descriptions.Item>
              <Descriptions.Item label="Email">{contentData.email}</Descriptions.Item>
              <Descriptions.Item label="Phone">{contentData.phone}</Descriptions.Item>
              <Descriptions.Item label="Website">{contentData.website}</Descriptions.Item>
            </Descriptions>
          </div>

          <div className="contact-company">
            <Divider orientation="left" orientationMargin="0" style={{borderColor: "rgba(28, 17, 41, 0.88)"}}>Company</Divider>
            <Descriptions layout="vertical">
              <Descriptions.Item label="Company name">{contentData.company.name} </Descriptions.Item>
              <Descriptions.Item label="Catch Phrase">{contentData.company.catchPhrase} </Descriptions.Item>
              <Descriptions.Item label="Bs">{contentData.company.bs} </Descriptions.Item>
            </Descriptions>
          </div>

          <div className="contact-address">
            <Divider orientation="left" orientationMargin="0" style={{borderColor: "rgba(28, 17, 41, 0.88)"}}>Address</Divider>
            <Descriptions layout="vertical">
              <Descriptions.Item label="Street">{contentData.address.street} </Descriptions.Item>
              <Descriptions.Item label="Suite">{contentData.address.suite} </Descriptions.Item>
              <Descriptions.Item label="City">{contentData.address.city} </Descriptions.Item>
              <Descriptions.Item label="Zipcode">{contentData.address.zipcode} </Descriptions.Item>
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