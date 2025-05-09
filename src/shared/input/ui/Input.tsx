import { ComponentProps } from "react";
import { StyledInput } from "../css/Input.css";

type InputProps = ComponentProps<"input"> & {
  maxLength: number;
  placeholder: string;
  width?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  error: boolean;
};

function Input(props: InputProps) {
  return <StyledInput {...props} />;
}

export default Input;
