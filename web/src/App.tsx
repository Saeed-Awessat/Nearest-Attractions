import React, { createContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CoordinatesContextType, Position } from "./Types/Coordinates";
import Routes from "./routes";

export const coordinatesContext = createContext<CoordinatesContextType | null>(
  null
);

function App() {
  const [coordinates, setCoordinates] = useState<Position>({
    latitude: null,
    longitude: null,
  });

  return (
    <coordinatesContext.Provider value={{ coordinates, setCoordinates }}>
      <Routes />
    </coordinatesContext.Provider>
  );
}

export default App;
