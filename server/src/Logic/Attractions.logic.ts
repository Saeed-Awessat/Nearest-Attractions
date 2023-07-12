export interface Coordinates {
  latitude: number | null;
  longitude: number | null;
}

const calcDistance = (Point1: Coordinates, Point2: Coordinates): number => {
  let { latitude: lat1, longitude: lon1 } = Point1;
  let { latitude: lat2, longitude: lon2 } = Point2;

  // The math module contains a function
  // named toRadians which converts from
  // degrees to radians.
  lon1 = (lon1! * Math.PI) / 180;
  lon2 = (lon2! * Math.PI) / 180;
  lat1 = (lat1! * Math.PI) / 180;
  lat2 = (lat2! * Math.PI) / 180;

  // Haversine formula
  let dlon = lon2 - lon1;
  let dlat = lat2 - lat1;
  let a =
    Math.pow(Math.sin(dlat / 2), 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);

  let c = 2 * Math.asin(Math.sqrt(a));

  // Radius of earth in kilometers. Use 3956
  // for miles
  let r = 6371;

  // calculate the result
  return c * r;
};

export const nearestAttractionsLogic = async (userCoord: Coordinates) => {
  const { latitude, longitude } = userCoord;
  if (latitude === null || longitude === null) {
    throw "userCoord not found";
  } else {
    const data = await require("../api/data/index").default;

    return data?.sort((a: any, b: any) => {
      const point1 = { latitude: a.X, longitude: a.Y } as Coordinates;
      const point2 = { latitude: b.X, longitude: b.Y } as Coordinates;
      const root = userCoord;
      return calcDistance(point1, root) - calcDistance(point2, root);
    });
  }
};
