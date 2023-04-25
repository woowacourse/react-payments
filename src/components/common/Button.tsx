import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface NextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isDisable?: boolean;
  text: string;
}

export default function NextButton({ isDisable, text }: NextButtonProps) {
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
  color: ${({ isDisable }) => (isDisable ? '#bebbbb' : '#000000')};
`;
