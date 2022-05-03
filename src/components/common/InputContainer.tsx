import React from "react";

import { Validation } from "../../types/cardInfo";
import Message from "./Message";

interface InputContainerProps {
  children: React.ReactNode;
  title: string;
  validation?: Validation;
  rightContent?: JSX.Element;
}

export default function InputContainer({
  children,
  title,
  validation,
  rightContent,
}: InputContainerProps) {
  return (
    <div className="input-container">
      <div className="input-container-top">
        <span>
          <label className="input-title">{title}</label>
          {validation &&
            (validation.isValid ? (
              <Message content={validation.successMsg} type="success" />
            ) : (
              validation.errorMsg && <Message content={validation.errorMsg} type="fail" />
            ))}
        </span>
        {rightContent}
      </div>
      {children}
    </div>
  );
}
