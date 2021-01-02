import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    borderRadius: 15,
    boxShadow: "2px 2px 4px #0008",
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
    borderRadius: 15,

    "&:hover": {
      background: "#008422",
    },
  },
  buttonUpdate: {
    marginBottom: 10,
    background: "#3f50b5",
    color: "#fff",
    borderRadius: 15,

    "&:hover": {
      background: "#002984",
    },
  },
  buttonClear: {
    borderRadius: 15,
  },
}));
