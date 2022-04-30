import React from "react";

import FailMessage from "./FailMessage";
import SuccessMessage from "./SuccessMessage";

interface InputContainerProps {
  children: React.ReactNode;
  title: string;
  isValid: boolean;
  shouldShowError?: boolean;
}

export default function InputContainer({
  children,
  title,
  isValid,
  shouldShowError = false,
}: InputContainerProps) {
  return (
    <div className="input-container">
      <div className="input-container-top">
        <label className="input-title">{title}</label>
        {isValid ? <SuccessMessage /> : shouldShowError && <FailMessage />}
      </div>
      {children}
    </div>
  );
}
