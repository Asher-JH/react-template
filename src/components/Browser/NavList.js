import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import DevicesIcon from "@material-ui/icons/Devices";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";

import urls from "@vars/urls";

import NavItem from "./NavItem";

const useStyles = makeStyles({
  root: {
    overflow: "auto",
  },
});

const items = [
  {
    label: "About Me",
    icon: <PersonIcon />,
    to: urls.PAGES.ABOUT_ME,
  },
  {
    label: "Social Links",
    icon: <DevicesIcon />,
    to: urls.PAGES.SOCIAL_LINKS,
  },
  {
    label: "Gallery",
    icon: <PhotoSizeSelectActualIcon />,
    to: urls.PAGES.GALLERY,
  },
];

const NavList = ({ handleClose }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List>
        {!!items.length &&
          items.map((navProps) => (
            <NavItem
              key={navProps.label}
              handleClose={handleClose}
              {...navProps}
            />
          ))}
      </List>
    </div>
  );
};

export default NavList;
