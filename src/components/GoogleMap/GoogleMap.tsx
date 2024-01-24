import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useGoogleMap } from "./hooks/useGoogleMap";

export const GoogleMapComp = () => {
  const { isLoaded, containerStyle, center, mapStyle } = useGoogleMap();
  return (
    <div className="contact-us-map">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={16}
          options={{
            styles: mapStyle,
          }}
        >
          <Marker position={center} />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};
