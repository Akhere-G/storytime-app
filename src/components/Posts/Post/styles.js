import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: 15,
    height: "100%",
    position: "relative",
    transition: "all linear 300ms",
    transform: "rotate3d(0, 1, 0, 0deg)",
    boxShadow: "2px 3px 5px #0008",

    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: "3px 5px 10px #0008",
    },
  },
  hidden: {
    transition: "all linear 300ms",
    transform: "rotate3d(0, 1, 0, 90deg)",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  title: {
    padding: "0 16px",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
});
