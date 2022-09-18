import React from "react";
import GoogleMapReact from "google-map-react";

import mapStyles from "./mapStyles";
import useStyles from "./styles.js";
import Marker from "./Marker/Marker";

const Map = ({ coords, places, setCoords, setBounds, setChildClicked }) => {
  const classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        center={coords}
        defaultZoom={14}
        margin={[100, 100, 100, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places.length &&
          places.map((place, id) => {
            return (
              <Marker
                place={place}
                key={id}
                lat={Number(place.latitude)}
                lng={Number(place.longitude)}
              />
            );
          })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
