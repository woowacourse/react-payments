import React from "react";
import styled from "styled-components";

export const Button = ({ children, onClick, disabled, type, textAlign }) => {
  return (
    <ButtonBox textAlign={textAlign}>
      <ButtonText onClick={onClick} type={type} disabled={disabled}>
        {children}
      </ButtonText>
    </ButtonBox>
  );
};

const ButtonBox = styled.div`
  width: 100%;
  text-align: ${(props) => (props.textAlign ? props.textAlign : "right")};
`;

const ButtonText = styled.button`
  color: #04c09e;
  background-color: transparent;
  border: none;
  font-weight: bold;
  cursor: pointer;

  &:disabled {
    color: #ecebf1;
  }
`;
