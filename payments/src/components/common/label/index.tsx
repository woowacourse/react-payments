import React from "react";
import "./index.scss";

const InputLabel = ({ children }: { children: React.ReactNode }) => {
  return <label className="input__label">{children}</label>;
};

export default InputLabel;
