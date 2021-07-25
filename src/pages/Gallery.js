import React from "react";

import BasicContainer from "@components/BasicContainer";
import PageHeader from "@components/PageHeader";
import ImageList from "@components/ImageList";
import Image1 from "@assets/img-1.jpg";
import Image2 from "@assets/img-2.jpg";
import Image3 from "@assets/img-3.jpg";
import Image4 from "@assets/img-4.jpg";
import Image5 from "@assets/img-5.jpg";

const data = [
  {
    img: Image1,
    cols: 1,
  },
  {
    img: Image5,
    cols: 2,
  },
  {
    img: Image3,
    cols: 2,
  },
  {
    img: Image4,
    cols: 1,
  },

  {
    img: Image2,
    cols: 3,
  },
];

const Gallery = () => {
  return (
    <BasicContainer>
      <PageHeader primary="Gallery" />
      {!!data?.length && <ImageList data={data} />}
    </BasicContainer>
  );
};

export default Gallery;
