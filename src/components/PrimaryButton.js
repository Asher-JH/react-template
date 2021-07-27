import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    padding: theme.spacing(1, 2.5),
  },
}));

const PrimaryButton = ({ label, icon }) => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="primary"
      fullWidth
      className={classes.button}
      endIcon={icon}
    >
      {label}
    </Button>
  );
};

export default PrimaryButton;
