import { InputHTMLAttributes } from "react";
import { InputCSS } from "./Input.styled";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError: string | null;
}

function Input({ isError, ...rest }: InputProps) {
  return <InputCSS $isError={isError} {...rest} />;
}

export default Input;
