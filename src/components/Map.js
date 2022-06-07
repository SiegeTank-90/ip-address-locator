import React from "react";
import { MapContainer, TileLayer, Marker, useMapEvent, useMap } from "react-leaflet";
import marker from '../images/icon-location.svg'
import L from "leaflet";
import HeaderBackground from "../images/pattern-bg.png";

const myIcon = new L.Icon({
  iconUrl: marker,
  iconRetinaUrl: marker,
  popupAnchor: [-0, -0],
  iconSize: [37, 45]
});

function Map(props) {

function FindCenter() {
    const map = useMap()
    map.panTo(props.centerMap)    
    

    return null

}
    

  return (
    <div className="Background">
      <img
        src={HeaderBackground}
        alt="HeaderBackground"
        className="BackgroundHeader"
      />
      <div className="MapContainer">
        <MapContainer
          center={[37.40599, -122.078514]}
          zoom={10}
          scrollWheelZoom={false}
          style={{
            position: "relative",
            zIndex: "1",
            height: "100%",
            width: "100%"
          }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker icon={myIcon} position={props.centerMap}></Marker>
          <FindCenter />
         </MapContainer>
      </div>
    </div>
  );
}

export default Map;
