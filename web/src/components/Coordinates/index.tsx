import React, { useContext } from "react";
import { coordinatesContext } from "../../App";
import { CoordinatesContextType } from "../../Types/Coordinates";
import { useNavigate } from "react-router-dom";

const Coordinates = () => {
  const navigate = useNavigate();

  const { coordinates, setCoordinates } = useContext(
    coordinatesContext
  ) as CoordinatesContextType;

  const getCoordinates = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCoordinates({ latitude, longitude });
    });
  };

  return (
    <div>
      <div>
        <button onClick={getCoordinates}>Get Coordinates</button>
        <button
          onClick={() => navigate(`/attractions`)}
          disabled={!coordinates.latitude || !coordinates.longitude}>
          Show The Nearest Attractions
        </button>
      </div>
      {coordinates && (
        <div>
          Latitude: {coordinates.latitude}
          <br />
          Longitude: {coordinates.longitude}
        </div>
      )}
    </div>
  );
};

export default Coordinates;
