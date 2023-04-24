import { InputHTMLAttributes } from "react";
import styled from "styled-components";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  textAlign?: string;
  isNumber?: boolean;
  showError?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.input<{ textAlign?: string }>`
  border: none;
  background-color: #ecebf1;
  font-size: 18px;
  font-weight: 500;
  width: 100%;
  text-align: ${(props) => props.textAlign};
`;

export default function Input({
  textAlign = "baseline",
  isNumber,
  showError,
  ...rest
}: InputProps) {
  return (
    <StyledInput
      textAlign={textAlign}
      inputMode={isNumber ? "numeric" : "text"}
      onBlur={showError}
      {...rest}
    />
  );
}
