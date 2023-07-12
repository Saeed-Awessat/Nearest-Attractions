export interface Position {
  latitude: number | null;
  longitude: number | null;
}

export interface CoordinatesContextType {
  coordinates: Position;
  setCoordinates: ({ latitude, longitude }: Position) => void;
}
