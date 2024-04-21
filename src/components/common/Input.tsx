import React, { forwardRef } from "react";
import styled, { CSSProperties } from "styled-components";

type InputSize = "small" | "medium" | "large";

type InputWidthSize = {
  [key in InputSize]: CSSProperties["width"];
};

const inputWidthSize: InputWidthSize = {
  small: "72px",
  medium: "152px",
  large: "315px",
} as const;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize: InputSize;
  isError: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ inputSize, isError, onChange, ...props }, ref) => {
    return (
      <StyledInput
        ref={ref}
        onChange={onChange}
        width={inputWidthSize[inputSize]}
        isError={isError}
        {...props}
      />
    );
  }
);

export default Input;

const StyledInput = styled.input<{
  width: CSSProperties["width"];
  isError: boolean;
}>`
  height: 32px;
  width: ${({ width }) => width};

  outline: none;
  border: ${({ isError }) =>
    isError ? "1px solid #ff3d3d" : "1px solid #acacac"};
  &:focus {
    border: ${({ isError }) =>
      isError ? "1px solid #ff3d3d" : "1px solid #000000"};
  }

  font-size: 11px;
  text-indent: 0.5rem;
  border-radius: 2px;
`;
