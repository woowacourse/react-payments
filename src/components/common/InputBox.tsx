import React, { ReactElement } from "react";
import styled from "styled-components";
import { LabelOption, LABEL, PLACEHOLDER } from "../../constants/inputInfo";
import { Input } from "./Input";
export interface InputBoxProps {
  type: LabelOption;
  render?: () => JSX.Element;
  children: React.ReactNode;
}

export function InputBox(props: InputBoxProps) {
  const { type, render, children } = props;
  return (
    <InputContainer>
      {render && render()}
      <Label>{LABEL[type]}</Label>
      <InputWrapper>{children}</InputWrapper>
    </InputContainer>
  );
}

const InputContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font: var(--text-caption);
  color: var(--grey-300);
  margin: 0.7rem;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* width: 51.8rem; */
  height: 4.5rem;

  background: #ecebf1;
  border-radius: 7px;
`;
