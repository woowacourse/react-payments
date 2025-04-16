import { InputCSS } from "./Input.styled";

export interface InputProps {
  placeholder: string;
  maxLength: number;
  isError: boolean;
}

function Input({ placeholder, maxLength, isError }: InputProps) {
  return (
    <InputCSS
      placeholder={placeholder}
      maxLength={maxLength}
      $isError={isError}
    />
  );
}

export default Input;
