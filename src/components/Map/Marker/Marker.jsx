import React from "react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./styles.js";

export default function Marker({ place }) {
  const matches = useMediaQuery("(min-width:600px)");
  const classes = useStyles();
  return (
    <div className={classes.markerContainer}>
      {!matches ? (
        <LocationOnOutlinedIcon color="primary" fontSize="large" />
      ) : (
        <Paper elevation={3} className={classes.paper}>
          <Typography
            className={classes.typography}
            variant="subtitle2"
            gutterBottom
          >
            {place.name}
          </Typography>
          <img
            className={classes.pointer}
            alt=""
            src={
              place.photo
                ? place.photo.images.large.url
                : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
            }
          />
          <Rating
            name="read-only"
            size="small"
            value={Number(place.rating)}
            readOnly
          />
        </Paper>
      )}
    </div>
  );
}
