import React from "react";

import ValidationMessage from "./ValidationMessage";

import { InputValidation } from "../hooks/useInputValidation";

interface InputContainerProps {
  children: React.ReactNode;
  inputTitle: string;
  validation: InputValidation;
}

export default function InputContainer({ children, inputTitle, validation }: InputContainerProps) {
  return (
    <div className="input-container">
      <div className="input-container-top">
        <span className="input-title">{inputTitle}</span>
        <ValidationMessage validation={validation} />
      </div>
      {children}
    </div>
  );
}
