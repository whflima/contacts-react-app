import { MapProps } from '../interfaces/interfaces';
import GoogleMapReact from 'google-map-react';
import { IoLocation } from "react-icons/io5";

const GOOGLE_MAPS_APIKey = process.env.REACT_APP_GOOGLE_MAPS_APIKey as string;

const Marker = (props: any) => {
  const color = 'black';
  return <IoLocation size={35} color={color} />;
};

export default function Map({ latitude, longitude }: MapProps) {
  const defaultProps = {
    center: {
      lat: latitude,
      lng: longitude,
    },
    zoom: 11,
  };

  return (
    <div style={{ height: '30vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAPS_APIKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker lat={latitude} lng={longitude} />
      </GoogleMapReact>
    </div>
  );
}
