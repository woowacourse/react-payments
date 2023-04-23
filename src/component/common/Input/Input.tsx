import React from "react";
import Style from "./InputStyled";

type InputProps = {
  type: string;
  isRequired: boolean;
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  value?: string;
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

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
