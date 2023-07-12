export interface Coordinates {
  latitude: number | null;
  longitude: number | null;
}

export const getNearestAttractions = async (userCoord: Coordinates) => {
  const { latitude, longitude } = userCoord;
  console.log({ userCoord });
  const response: any = await fetch(
    `/api/attractions?X=${latitude ? latitude : ""}&Y=${
      longitude ? longitude : ""
    }`
  );
  if (response.ok) {
    const results = await response.json();
    return results.nearestAttractions;
  }
  throw response;
};
