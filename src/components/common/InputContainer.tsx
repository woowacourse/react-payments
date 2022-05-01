import React from "react";

import FailMessage from "./FailMessage";
import SuccessMessage from "./SuccessMessage";

interface InputContainerProps {
  children: React.ReactNode;
  title: string;
  isValid: boolean;
  shouldShowError?: boolean;
  rightContent?: JSX.Element;
}

export default function InputContainer({
  children,
  title,
  isValid,
  shouldShowError = false,
  rightContent,
}: InputContainerProps) {
  return (
    <div className="input-container">
      <div className="input-container-top">
        <span>
          <label className="input-title">{title}</label>
          {isValid ? <SuccessMessage /> : shouldShowError && <FailMessage />}
        </span>
        {rightContent}
      </div>
      {children}
    </div>
  );
}
