import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ImageList as MuiImageList, ImageListItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  imageList: {
    width: "100%",
    height: "100%",
  },
}));

const ImageList = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiImageList rowHeight={200} className={classes.imageList} cols={3}>
        {data.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1}>
            <img src={item.img} alt={item.title} />
          </ImageListItem>
        ))}
      </MuiImageList>
    </div>
  );
};

export default ImageList;
