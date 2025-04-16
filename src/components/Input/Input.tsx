import { InputCSS } from "./Input.styled";

export interface InputProps {
  placeholder: string;
  maxLength: number;
}

function Input({ placeholder, maxLength }: InputProps) {
  return <InputCSS placeholder={placeholder} maxLength={maxLength} />;
}

export default Input;
