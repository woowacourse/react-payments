import React from "react";
import styled from "styled-components";
import { LABEL } from "../../constants/inputInfo";
import { LabelOption } from "../../type/input";

export interface InputBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  type: LabelOption;
  render?: () => JSX.Element;
  children: React.ReactNode;
  error?: string | null;
}

export function InputBox(props: InputBoxProps) {
  const { type, render, children, error, ...restProps } = props;
  return (
    <InputContainer>
      {render && render()}
      <Label>{LABEL[type]}</Label>
      <InputWrapper {...restProps}>{children}</InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
}

const InputContainer = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  ${({ theme }) => theme.fonts.label};
  color: ${({ theme }) => theme.colors.gray400};
  margin-bottom: 0.3rem;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.5rem;

  ${({ theme }) => theme.fonts.body}

  background: ${({ theme }) => theme.colors.gray200};
  border-radius: 7px;
`;

const ErrorMessage = styled.strong`
  margin-top: 1rem;

  color: ${({ theme }) => theme.colors.error};
`;
