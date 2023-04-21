import React from "react";
import Style from "./InputStyled";

type InputProps = {
  id?: string;
  type: string;
  value?: string;
  minLength: number;
  isRequired: boolean;
  placeholder?: string;
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ isRequired, ...props }: InputProps) {
  return <Style.Input {...props} required={isRequired ? true : false} />;
}

export default Input;
