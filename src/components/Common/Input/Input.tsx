import { InputHTMLAttributes } from "react";
import { InputStyles } from "./Input.styled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError: boolean;
  ref?: React.Ref<HTMLInputElement>;
}

export default function Input({ isError = false, ref, ...props }: InputProps) {
  return <InputStyles $isError={isError} ref={ref} {...props} />;
}
