import React from "react";
import { Spinner } from "react-bootstrap";
const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      variant="light"
      style={{
        width: "100px",
        height: "100px",
        margin: "auto",
        display: "block",
        marginTop: "150px",
      }}
    ></Spinner>
  );
};

export default Loader;
