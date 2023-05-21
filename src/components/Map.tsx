import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import styles from "./Map.module.css";

const myIcon = new L.Icon({
  iconUrl: require("../images/location.svg").default,
  iconRetinaUrl: require("../images/location.svg").default,
  popupAnchor: [-0, -0],
  iconSize: [32, 40],
});

const Map: React.FC<{
  position: number[];
}> = ({ position }) => {
  const positionTuple: L.LatLngTuple = [position[0], position[1]];
  return (
    <MapContainer
      key={position.toString()}
      zoom={8}
      center={positionTuple}
      className={styles.map}
    >
      <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
      <Marker position={positionTuple} icon={myIcon}>
        <Popup className={styles.popup}>Here's the host</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
