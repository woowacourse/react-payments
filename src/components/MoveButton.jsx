import React from 'react';
import styled from 'styled-components';

const MoveWrapperStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`;

const MoveButtonStyled = styled.button`
  cursor: pointer;
  color: #fff;
  background-color: ${({ color }) => color};
  border: 0;
  font-weight: 700;
  font-size: 14px;
  border-radius: 8px;
  width: 100%;
  height: 35px;
  &:disabled {
    color: #fff;
    cursor: default;
    background-color: #e5e5e5;
  }
`;

export default function MoveButton({ onClick, disabled, children, color }) {
  return (
    <MoveWrapperStyled>
      <MoveButtonStyled color={color} onClick={onClick} disabled={disabled}>
        {children}
      </MoveButtonStyled>
    </MoveWrapperStyled>
  );
}
