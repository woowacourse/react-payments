import React, { HTMLInputTypeAttribute, forwardRef } from "react";
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

interface InputProps {
  size: InputSize;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  isError: boolean;
  value: string;
  id?: string;
  minLength?: number;
  maxLength: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size, isError, onChange, ...props }, ref) => {
    return (
      <StyledInput
        ref={ref}
        width={inputWidthSize[size]}
        onChange={onChange}
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
