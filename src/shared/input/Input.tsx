import { StyledInput } from "./Input.css";

type InputProps = {
  maxLength: number;
  placeholder: string;
  width?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  isError: boolean;
};

function Input({
  width,
  maxLength,
  placeholder,
  onChange,
  value,
  isError,
}: InputProps) {
  return (
    <StyledInput
      width={width}
      placeholder={placeholder}
      maxLength={maxLength}
      value={value}
      onChange={onChange}
      isError={isError}
    />
  );
}

export default Input;
