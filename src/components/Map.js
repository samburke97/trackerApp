import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import styles from "./Map.module.css";

const myIcon = new L.Icon({
  iconUrl: require("../images/location.svg").default,
  iconRetinaUrl: require("../images/location.svg").default,
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
      <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
      <Marker position={position} icon={myIcon}>
        <Popup className={styles.popup}>Here's the host</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
