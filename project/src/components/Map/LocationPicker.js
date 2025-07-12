import { useMapEvents } from "react-leaflet";

const LocationPicker = ({ onLocationSelect }) => {
  useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      onLocationSelect([lng, lat]);
    },
  });

  return null;
};

export default LocationPicker;
