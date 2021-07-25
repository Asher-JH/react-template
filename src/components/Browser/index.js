import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import AppBar from "./AppBar";
import Drawer from "./Drawer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),

    "&:before": {
      content: "''",
      display: "block",
      ...theme.mixins.toolbar,

      [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(5),
      },
    },
  },
}));

const Browser = ({ children }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar onClick={() => setOpen(true)} />
      <Drawer open={open} onClose={() => setOpen(false)} />
      <main className={classes.content}>{children}</main>
    </div>
  );
};

export default Browser;
