import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar as MuiAppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

const AppBar = ({ onClick }) => {
  const classes = useStyles();

  return (
    <MuiAppBar position="fixed" className={classes.root}>
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={onClick}
          aria-label="open drawer"
          edge="start"
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
