import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import BasicContainer from "@components/BasicContainer";
import PageHeader from "@components/PageHeader";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  textBox: {
    margin: theme.spacing(5, 0),
  },
}));

const AboutMe = () => {
  const classes = useStyles();

  return (
    <BasicContainer>
      <PageHeader primary="About Me" secondary="Some facts about me" />
      <Typography variant="body1" className={classes.textBox}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Typography>
      <div className={classes.container}>
        <Typography variant="caption">{new Date().toString()}</Typography>
      </div>
    </BasicContainer>
  );
};

export default AboutMe;
