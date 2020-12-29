import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    overflow: "hidden",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
    backgroun: "transparent",
  },
  buttonSubmit: {
    marginBottom: 10,
    background: "#3fb550",
    color: "#fff",
    "&:hover": {
      background: "#008422",
    },
  },
  buttonUpdate: {
    marginBottom: 10,
    background: "#3f50b5",
    color: "#fff",
    "&:hover": {
      background: "#002984",
    },
  },
}));
