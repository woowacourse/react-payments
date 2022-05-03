import React from "react";
import "./index.scss";

const Color = ({ color, name, onClick }) => {
  return (
    <button onClick={onClick} className="color">
      <div className="circle" style={{ backgroundColor: color }} />
      <p className="name">{name}</p>
    </button>
  );
};

export default Color;
