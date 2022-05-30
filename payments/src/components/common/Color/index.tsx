import React from "react";
import "./index.scss";
interface ColorProps {
  color: string;
  name: string;
  onClick?: () => void;
}

const Color = ({ color, name, onClick }: ColorProps) => {
  return (
    <button onClick={onClick} className="color">
      <div className="circle" style={{ backgroundColor: color }} />
      <p className="name">{name}</p>
    </button>
  );
};

export default Color;
