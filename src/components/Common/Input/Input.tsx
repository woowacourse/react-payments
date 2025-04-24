import { InputHTMLAttributes } from "react";
import { InputStyles } from "./Input.styled";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError: boolean;
}

export default function Input({ isError = false, ...props }: InputProps) {
  return <InputStyles $isError={isError} {...props} />;
}
