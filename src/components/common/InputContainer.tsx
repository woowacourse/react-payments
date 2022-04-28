import React from "react";

import FailMessage from "./FailMessage";
import SuccessMessage from "./SuccessMessage";

export default function InputContainer({ children, inputTitle, isValid, isError = false }) {
  return (
    <div className="input-container">
      <div className="input-container-top">
        <span className="input-title">{inputTitle}</span>
        {isValid ? <SuccessMessage /> : isError && <FailMessage />}
      </div>
      {children}
    </div>
  );
}
