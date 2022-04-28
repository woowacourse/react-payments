import React from "react";

import SuccessMessage from "./SuccessMessage";

export default function InputContainer({ children, inputTitle, isValid }) {
  return (
    <div className="input-container">
      <div className="input-container-top">
        <span className="input-title">{inputTitle}</span>
        {isValid && <SuccessMessage />}
      </div>
      {children}
    </div>
  );
}
