import React, { InputHTMLAttributes } from "react";
import Style from "./InputStyled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isRequired: boolean;
  inputRef?: React.RefObject<HTMLInputElement>;
}

function Input({ isRequired, inputRef, ...props }: InputProps) {
  return (
    <Style.InputSection>
      <Style.Input
        {...props}
        required={isRequired ? true : false}
        ref={inputRef}
      />
    </Style.InputSection>
  );
}

export default Input;
