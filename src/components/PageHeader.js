import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3),
  },
  primary: {
    fontWeight: "600",
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

const PageHeader = ({ primary, secondary }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.primary}>
        {primary}
      </Typography>
      {!!secondary && <Typography variant="overline">{secondary}</Typography>}
      <Divider
        classes={{
          root: classes.divider,
        }}
      />
    </div>
  );
};

export default PageHeader;
