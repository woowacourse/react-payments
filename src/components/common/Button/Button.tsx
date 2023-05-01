import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isDisable?: boolean;
  text: string;
}

export default function Button({ isDisable, text }: ButtonProps) {
  return (
    <Wrapper isDisable={isDisable} disabled={isDisable} tabIndex={10}>
      {text}
    </Wrapper>
  );
}

const Wrapper = styled.button<{ isDisable?: boolean }>`
  cursor: ${({ isDisable }) => (isDisable ? 'not-allowed' : 'pointer')};
  border: 0;
  background-color: transparent;
  font-size: 14px;
  font-weight: 700;
  color: ${({ isDisable, theme }) =>
    isDisable ? theme.colors.gray : theme.colors.primaryText};
`;
