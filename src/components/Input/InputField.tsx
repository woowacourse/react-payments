import { ChangeEventHandler, SetStateAction, useState, Dispatch } from "react";

interface Props {
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  errorMessage: string;
}

const InputField = ({ placeholder, onChange, value, errorMessage }: Props) => {
  return (
    <>
      <input onChange={onChange} placeholder={placeholder} value={value} />
      <span>{errorMessage}</span>
    </>
  );
};

export default InputField;
