import React, { useContext, useState } from "react";
import { coordinatesContext } from "../../App";
import { CoordinatesContextType } from "../../Types/Coordinates";
import { getNearestAttractions } from "../../api/appRequest";
import { calcDistance } from "../../util/functions";

const ListOfAttractions = () => {
  const { coordinates } = useContext(
    coordinatesContext
  ) as CoordinatesContextType;

  const [neareastAttractions, setNearestAttractions] = useState<any>([]);
  const [items, setItems] = useState<any>({});

  React.useEffect(() => {
    const getAttractions = async () => {
      const attractions = await getNearestAttractions(coordinates);
      setNearestAttractions(attractions);
    };

    getAttractions();
  }, [coordinates]);

  React.useEffect(() => {
    console.log(items);
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const addToFavorite = (index: number, data: any) => {
    const key = `${index}`;
    const attractions = structuredClone(items);
    if (attractions[key]) {
      delete attractions[key];
    } else {
      attractions[key] = { ...data };
    }
    setItems({ ...attractions });
  };

  return (
    <div>
      {neareastAttractions && neareastAttractions.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th>Attraction Name</th>
              <th>Attraction ID</th>
              <th>Attraction Address</th>
              <th>Opening Hours</th>
              <th>Distance in Kilometers</th>
              <th>Product Url</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {neareastAttractions.map((data: any, index: number) => {
              return (
                <tr key={index}>
                  <td>{data.Name}</td>
                  <td>{data.Id}</td>
                  <td>{data.Address}</td>
                  <td>{data.Opening_Hours ?? ""}</td>
                  <td>
                    {calcDistance(
                      { latitude: data.X, longitude: data.Y },
                      coordinates
                    ).toFixed(4)}
                  </td>
                  <td>{data.Product_Url}</td>
                  <td>
                    <button onClick={() => addToFavorite(index, data)}>
                      {!items[index]
                        ? "Add to Favorite"
                        : "Remove from Favorite"}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListOfAttractions;
