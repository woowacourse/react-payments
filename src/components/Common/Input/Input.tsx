import { ComponentProps } from "react";
import { InputStyles } from "./Input.styled";

interface InputProps extends ComponentProps<"input"> {
  isError: boolean;
}

export default function Input({ isError = false, ref, ...props }: InputProps) {
  return <InputStyles $isError={isError} ref={ref} {...props} />;
}
