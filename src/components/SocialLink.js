import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    height: 120,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: ({ color }) => !!color && color,
  },
}));

const SocialLink = ({ icon, text, color }) => {
  const classes = useStyles({ color });

  return (
    <Grid item xs={6} md={4}>
      <Paper className={classes.paper}>
        <div className={classes.icon}>{icon}</div>
        <Typography>{text}</Typography>
      </Paper>
    </Grid>
  );
};

export default SocialLink;
