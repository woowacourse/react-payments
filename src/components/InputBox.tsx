import React, { ReactElement } from "react";
import styled from "styled-components";

export interface InputBoxProps {
  labelText: string;
  placeholder?: string;
  render?: () => JSX.Element;
}

export function InputBox(props: InputBoxProps) {
  const { labelText, placeholder, render } = props;
  return (
    <InputContainer>
      {render && render()}
      <Label>{labelText}</Label>
      <Input placeholder={placeholder} />
    </InputContainer>
  );
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font: var(--text-caption);
  color: var(--grey-300);
  margin: 0.7rem;
`;
const Input = styled.input`
  width: 31.8rem;
  height: 4.5rem;

  background: #ecebf1;
  border-radius: 7px;
`;
