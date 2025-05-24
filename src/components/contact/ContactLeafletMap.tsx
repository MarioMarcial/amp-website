import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

export const ContactLeafletMap = () => {
  return (
    <MapContainer
      center={[19.033614467940865, -98.20982626468486]}
      zoom={18}
      style={{ height: '400px', width: '100%' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[19.033614467940865, -98.20982626468486]}
        icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })
        }
      >
        <Popup>
          ACADEMIA DE MÚSICA. <br /> ARTE MUSICAL PUEBLA.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
