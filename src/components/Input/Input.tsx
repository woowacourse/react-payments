import { InputCSS } from "./Input.styled";

export interface InputProps {
  placeholder: string;
}

function Input({ placeholder }: InputProps) {
  return <InputCSS placeholder={placeholder} />;
}

export default Input;
