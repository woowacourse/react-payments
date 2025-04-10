import React from "react";
import styled from "styled-components";

interface InputProps {
  isFocused: boolean;
  isError: boolean;
}

// interface 사용법 익히는 중

interface InputNumProps {
  value: string;
  index: number;
  onFocus: (index: number) => void;
  onBlur: () => void;
  onChange: (index: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  isFocus: boolean;
  isError: boolean;
  inputRef?: React.RefObject<HTMLInputElement>;
}

const CardInput = styled.input<InputProps>`
  outline: none;
  border-radius: 4px;
  border: 2px solid;
  border-color: ${(props) => (props.isError ? "red" : props.isFocused ? "black" : "lightgray")};
  width: 100px;
  height: 30px;
`;

const InputNum = ({
  value,
  index,
  onFocus,
  onBlur,
  onChange,
  isFocus,
  isError,
  inputRef
}: InputNumProps) => {
  return (
    // 부모에서 받은 props는 타입 표시가 필요하다
    <CardInput
      type="text"
      maxLength={4}
      placeholder=" 1234"
      value={value}
      onFocus={() => onFocus(index)}
      onBlur={onBlur}
      onChange={(e) => onChange(index, e)}
      isFocused={isFocus}
      isError={isError}
      ref={inputRef}
    />
  );
};

export default InputNum;
