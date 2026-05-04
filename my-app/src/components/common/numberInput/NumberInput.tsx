import type { Ref } from "react";
import { StyledInput } from "./NumberInput.styles";

interface Props {
  value: string;
  onChange: (value:string)=>void;
  onBlur: (value:string)=>void;
  placeholder: string;
  isError: boolean;
  ref: Ref<HTMLInputElement>;
}

const NumberInput = ({value, onChange, onBlur, placeholder, isError, ref}: Props) => {

  return (
    <StyledInput
      type="text"
      inputMode="numeric"
      value={value}
      onChange={(e)=>onChange(e.target.value)}
      onBlur={(e)=>onBlur(e.target.value)}
      placeholder={placeholder}
      isError={isError}
      ref={ref}
    />
  );
}

export default NumberInput;
