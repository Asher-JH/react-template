import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer as MuiDrawer, Toolbar } from "@material-ui/core";

import NavList from "./NavList";

const DRAWER_WIDTH = 280;

const useStyles = makeStyles({
  root: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
  },
  drawerContainer: {
    overflow: "auto",
  },
});

const Drawer = ({ open, onClose }) => {
  const classes = useStyles();

  return (
    <MuiDrawer
      className={classes.drawer}
      anchor="left"
      open={open}
      onClose={onClose}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <NavList handleClose={onClose} />
    </MuiDrawer>
  );
};

export default Drawer;
