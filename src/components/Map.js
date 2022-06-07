import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import Location from "../images/icon-location.svg";
import HeaderBackground from "../images/pattern-bg.png";

function Map() {
  return (
    <div className="Background">
      <img
        src={HeaderBackground}
        alt="HeaderBackground"
        className="BackgroundHeader"
      />
      <div className="MapContainer">
        {/* <img className="pointer" src={Location} alt="pointer" /> */}
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "1000px", width: "1000px" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default Map;
