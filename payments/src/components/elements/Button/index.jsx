import React from "react";

const Button = ({ className, children, onClick, style }) => {
  return (
    <button type="button" className={className} onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default Button;
