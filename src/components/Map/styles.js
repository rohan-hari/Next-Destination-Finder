import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  markerContainer: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    "&:hover": { zIndex: 2 },
  },
}));
