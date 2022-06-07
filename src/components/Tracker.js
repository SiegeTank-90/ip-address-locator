import React, { useState } from "react";
import axios from "axios";
import Arrow from "../images/icon-arrow.svg";

function ValidateIPaddress(ipaddress) {
  if (
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
      ipaddress
    )
  ) {
    return true;
  }
  alert("You have entered an invalid IP address!");
  return false;
}

function IPtracker(props) {
  const [ipTracker, setIpTracker] = useState({
    ipaddress: "8.8.8.8",
    loc: "Mountain View, California, 94043",
    tz: "UTC -07:00",
    isp: "Google LLC"
  });

  const [inputfield, setinputField] = useState("");

  function handleInputChange(event) {
    setinputField(event.target.value);
  }

  function submitIPaddress(e) {
    e.preventDefault();
    if (ValidateIPaddress(inputfield) === true) {
      console.log("Passed IP Validation");
      getData(inputfield);
    }
  }

  async function getData(ipaddress) {
    try {
      let response = await axios.get(
        "https://geo.ipify.org/api/v2/country,city?apiKey=at_0BOnNjUral7d6SIj7iTXhFhSmrDR5&ipAddress=" +
          ipaddress
      );
      console.log(response);
      setIpTracker({
        ...ipTracker,
        ipaddress: response.data.ip,
        loc:
          response.data.location.city +
          "," +
          response.data.location.region +
          "," +
          response.data.location.postalCode,
        tz: "UTC " + response.data.location.timezone,
        isp: response.data.isp
      });
      props.setCenterMap([
        response.data.location.lat,
        response.data.location.lng
      ]);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="IPContainer">
      <div className="ContentContainer">
        <div className="ContentWidth">
          {" "}
          <h1 className="Title">IP Address Tracker</h1>
          <div className="formContainer">
            <form onSubmit={submitIPaddress} className="formclass">
              <input
                className="inputfield"
                value={inputfield}
                onChange={handleInputChange}
                placeholder="Search for any IP address or domain"
              />
              <button type="submit" className="button">
                <img className="arrowIcon" src={Arrow} alt="arrow" />
              </button>
            </form>
          </div>
          <div className="DataContainer">
            <div className="contentBox">
              <div className="contentframe">
                <h5 className="contentHeader">IP ADDRESS</h5>
                <p className="content">{ipTracker.ipaddress}</p>
              </div>
              <div className="BoxBoder"></div>
            </div>
            <div className="contentBox">
              <div className="contentframe">
                <h5 className="contentHeader">LOCATION</h5>
                <p className="content">{ipTracker.loc}</p>
              </div>
              <div className="BoxBoder"></div>
            </div>
            <div className="contentBox">
              <div className="contentframe">
                <h5 className="contentHeader">TIME ZONE</h5>
                <p className="content">{ipTracker.tz}</p>
              </div>
              <div className="BoxBoder"></div>
            </div>
            <div className="contentBox">
              <div className="contentframe">
                <h5 className="contentHeader">ISP</h5>
                <p className="content">{ipTracker.isp}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IPtracker;
