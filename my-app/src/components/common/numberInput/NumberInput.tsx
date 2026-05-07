import type { Ref } from "react";
import { StyledInput } from "./NumberInput.styles";

interface Props {
  value: string;
  onChange: (value:string)=>void;
  onBlur: (value:string)=>void;
  placeholder: string;
  isError: boolean;
  maxLength: number;
  ref?: Ref<HTMLInputElement>;
  id: string;
  type?: 'text' | 'password';
}

const NumberInput = ({value, onChange, onBlur, placeholder, isError, maxLength, ref, id, type='text'}: Props) => {

  return (
    <StyledInput
      id={id}
      type={type}
      inputMode="numeric"
      value={value}
      onChange={(e)=>onChange(e.target.value)}
      onBlur={(e)=>onBlur(e.target.value)}
      placeholder={placeholder}
      isError={isError}
      maxLength={maxLength}
      ref={ref}
    />
  );
}

export default NumberInput;
