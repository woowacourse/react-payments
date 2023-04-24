import React from 'react';

import styled from 'styled-components';

import { LABEL } from '../../constants/inputInfo';
import { LabelOption } from '../../type/input';

interface InputBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  key: LabelOption;
  render?: () => JSX.Element;
  children: React.ReactNode;
  error?: string | null;
}

export function InputBox(props: InputBoxProps) {
  const { key, render, children, error, ...restProps } = props;
  return (
    <InputContainer>
      {render && render()}
      <Label>{LABEL[key]}</Label>
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
  font: var(--text-caption);
  color: var(--grey-300);
  margin-bottom: 0.3rem;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 51.8rem; */
  height: 4.5rem;

  font-size: 1.5rem;

  background: #ecebf1;
  border-radius: 7px;
`;

const ErrorMessage = styled.strong`
  margin-top: 1rem;

  color: red;
`;
