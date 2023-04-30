import { InputHTMLAttributes } from "react";
import styled, { css } from "styled-components";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  textAlign?: string;
  isNumber?: boolean;
  shape?: string;
  showError?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.input<{ shape?: string; textAlign?: string }>`
  font-size: 18px;
  font-weight: 500;
  width: 100%;
  text-align: ${(props) => props.textAlign || "left"};
  border: none;
  outline: none;
  background-color: #ecebf1;

  ${(props) =>
    props.shape === "underline" &&
    css`
      border-bottom: 1px solid #d1d1d1;
      background-color: transparent;
    `}
`;

export default function Input({
  textAlign = "baseline",
  isNumber,
  shape,
  showError,
  ...rest
}: InputProps) {
  return (
    <StyledInput
      textAlign={textAlign}
      inputMode={isNumber ? "numeric" : "text"}
      shape={shape}
      onBlur={showError}
      {...rest}
    />
  );
}
