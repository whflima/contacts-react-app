import { MapProps } from '../interfaces/interfaces';
import GoogleMapReact from 'google-map-react';
import { IoLocation } from "react-icons/io5";

const Marker = (props: any) => {
    return <IoLocation  size={35}/>
  }

export default function Map({ latitude, longitude }: MapProps) {
    const defaultProps = {
        center: {
            lat: latitude,
            lng: longitude
        },
        zoom: 11
    };

    return (
        <div style={{ height: '30vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyAlm5FzjzdT911Ep7JvKQJr2imRB8eBFoQ" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <Marker lat={latitude} lng={longitude} />
            </GoogleMapReact>
        </div>
    );
};