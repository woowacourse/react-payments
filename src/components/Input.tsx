import React from "react";
import styled from "styled-components";

const SInput = styled.input`
  width: 100%;
  height: 15px;
  padding: 8px 15px 8px 8px;
  gap: 8px;
  border: 1px solid rgba(172, 172, 172, 1);
  border-radius: 2px;
  font-family: Inter;
  font-size: 11px;
  font-weight: 400;
  line-height: 14.88px;
  text-align: left;

  &::placeholder {
    color: rgba(172, 172, 172, 1);
  }
`;

interface Props {
  maxLength: number;
  placeholder: string;
  inputHandler: (inputValue: string) => void;
}

export default function Input({ maxLength, placeholder, inputHandler }: Props) {
  return (
    <SInput
      type="text"
      maxLength={maxLength}
      placeholder={placeholder}
      onChange={(e) => inputHandler(e.target.value)}
    ></SInput>
  );
}
