import React from 'react';
import styled from 'styled-components';

interface NextButtonProps {
  isDisable: boolean;
}

const Wrapper = styled.button<{ isDisable: boolean }>`
  cursor: ${({ isDisable }) => (isDisable ? 'not-allowed' : 'pointer')};
  border: 0;
  background-color: transparent;
  font-size: 14px;
  font-weight: 700;
  color: ${({ isDisable }) => (isDisable ? '#bebbbb' : '#000000')};
`;

export default function NextButton({ isDisable }: NextButtonProps) {
  return (
    <Wrapper isDisable={isDisable} disabled={isDisable} tabIndex={10}>
      다음
    </Wrapper>
  );
}
