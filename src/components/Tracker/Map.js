import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import styles from "./Map.module.css";

const myIcon = new L.Icon({
  iconUrl: require("../../images/icon-location.svg").default,
  iconRetinaUrl: require("../../images/icon-location.svg").default,
  popupAnchor: [-0, -0],
  iconSize: [32, 40],
});

const Map = ({ position }) => {
  return (
    <MapContainer
      key={position.toString()}
      zoom={8}
      center={position}
      className={styles.map}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
      <Marker position={position} icon={myIcon}>
        <Popup>Here's the host</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
