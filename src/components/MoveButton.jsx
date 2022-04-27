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
`;

export default function MoveButton({ children }) {
  return (
    <MoveWrapperStyled>
      <MoveButtonStyled>{children}</MoveButtonStyled>
    </MoveWrapperStyled>
  );
}
