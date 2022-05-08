import React from "react";
import "./index.scss";

const Color = ({ color, name, onClick, role }) => {
  return (
    <button onClick={onClick} className="color" role={role} aria-level={color}>
      <div className="circle" style={{ backgroundColor: color }} />
      <p className="name">{name}</p>
    </button>
  );
};

export default Color;
