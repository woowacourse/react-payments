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
  return (
    <>
      <Style.InputSection>
        <Style.Input {...props} required={isRequired ? true : false} />
      </Style.InputSection>
    </>
  );
}

export default Input;
