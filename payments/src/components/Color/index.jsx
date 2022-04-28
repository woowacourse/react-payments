import React from "react";
import Button from "../elements/Button";
import "./index.scss";

const Color = ({ color, name }) => {
  const pickColor = () => {
    console.log(color, name);
  };
  return (
    <Button onClick={pickColor} className="color">
      <div className="circle" style={{ backgroundColor: color }} />
      <p className="name">{name}</p>
    </Button>
  );
};

export default Color;
