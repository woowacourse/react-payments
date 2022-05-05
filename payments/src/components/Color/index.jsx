import React from "react";
import Button from "../elements/Button";
import "./index.scss";

const Color = ({ color, name, setVisible, updateForm }) => {
  const pickColor = () => {
    setVisible(false);
    updateForm({
      type: "pickColor",
      payload: { cardName: name, color },
    });
  };
  return (
    <Button onClick={pickColor} className="color">
      <div className="circle" style={{ backgroundColor: color }} />
      <p className="name">{name}</p>
    </Button>
  );
};

export default Color;
