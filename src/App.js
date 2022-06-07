import Map from "./components/Map.js";
import Tracker from "./components/Tracker.js";
import "./App.css";
import { useState } from "react";

function App() {

  const [centerMap, setCenterMap] = useState([37.40599, -122.078514])


  return (
    <div className="App">
      <Tracker centerMap={centerMap} setCenterMap={setCenterMap} />
      <Map centerMap={centerMap}/>
    </div>
  );
}

export default App;
