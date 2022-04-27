import React from 'react';
import styled from 'styled-components';

const MoveWrapperStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`;

const MoveButtonStyled = styled.button`
  cursor: pointer;
  color: #04c09e;
  border: 0;
  font-weight: 700;
  font-size: 14px;
  background-color: transparent;
  &:disabled {
    color: #e5e5e5;
  }
`;

export default function MoveButton({ disabled, children }) {
  return (
    <MoveWrapperStyled>
      <MoveButtonStyled disabled={disabled}>{children}</MoveButtonStyled>
    </MoveWrapperStyled>
  );
}
