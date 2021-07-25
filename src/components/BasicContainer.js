import React from "react";
import { CssBaseline, Container } from "@material-ui/core";

const BasicContainer = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">{children}</Container>
    </>
  );
};

export default BasicContainer;
