import React from "react";
import styled from "styled-components";
import { COLORS } from "constants/color";
import { inputType } from "types";

interface InputUnderlineComponent {
  type: inputType;
  placeholder: string;
  value: string;
  onChange: () => void;
  id: string;
  width: string;
  pattern: string;
  inputRef: React.RefObject<HTMLInputElement>;
  maxLength: number;
}

export const InputUnderline = ({
  type,
  placeholder,
  value,
  onChange,
  id,
  width,
  pattern,
  inputRef,
  maxLength,
}: InputUnderlineComponent) => {
  return (
    <InputUnderlineStyle
      width={width}
      type={type}
      ref={inputRef}
      placeholder={placeholder}
      value={value}
      id={id}
      pattern={pattern}
      maxLength={maxLength}
      onChange={onChange}
    />
  );
};

const InputUnderlineStyle = styled.input`
  background-color: transparent;
  color: ${COLORS.BLACK_100};
  height: 45px;
  width: ${(props) => props.width || "100%"};
  text-align: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
  font-size: 16px;
  border-color: ${COLORS.GRAY_250};
  border-style: none none solid none;
  border-width: 1.5px;
`;
