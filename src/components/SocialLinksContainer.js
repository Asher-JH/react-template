import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import SocialLink from "./SocialLink";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const SocialLinkContainer = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {!!data?.length &&
          data.map((social) => <SocialLink key={social.text} {...social} />)}
      </Grid>
    </div>
  );
};

export default SocialLinkContainer;
