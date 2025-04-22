import { InputHTMLAttributes } from "react";
import { InputCSS } from "./Input.styled";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError: boolean;
}

function Input({ isError, ...props }: InputProps) {
  return <InputCSS $isError={isError} {...props} />;
}

export default Input;
