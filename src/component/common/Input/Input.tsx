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
};

function Input({ isRequired, ...props }: InputProps) {
  return (
    <Style.InputSection>
      <Style.Input {...props} required={isRequired ? true : false} />
    </Style.InputSection>
  );
}

export default Input;
