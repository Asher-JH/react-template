import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField as MuiTextField, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: theme.spacing(2, 0),
  },
  input: {
    background: "#fefefe",
    border: "none",
  },
}));

const Input = withStyles({
  root: {
    background: "#ededed",
    borderRadius: 5,
    borderColor: "#ededed",
    borderWidth: 1,

    "& input:valid + fieldset": {
      border: "none",
    },
    "& input:invalid + fieldset": {
      border: "none",
    },
    "& input:valid:focus + fieldset": {
      border: "none",
    },
  },
})(MuiTextField);

const TextField = ({
  label,
  value,
  type = "text",
  placeholder,
  name,
  multiline,
  rows,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1" gutterBottom>
        {label}
      </Typography>
      <Input
        name={name}
        variant="outlined"
        type={type}
        fullWidth
        multiline
        rows={multiline && rows}
        value={value}
        placeholder={placeholder || ""}
      />
    </div>
  );
};

export default TextField;
