import { ChangeEvent } from "react";
import { InputCSS } from "./Input.styled";

export interface InputProps {
  placeholder?: string;
  maxLength: number;
  isError: boolean;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  placeholder,
  maxLength,
  isError,
  value,
  onChange,
}: InputProps) {
  return (
    <InputCSS
      placeholder={placeholder}
      maxLength={maxLength}
      $isError={isError}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
