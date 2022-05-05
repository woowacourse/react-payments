import React from "react";
import styled from "styled-components";

export const Button = ({ children, handleClick, disabled, type }) => {
  return (
    <ButtonBox>
      <ButtonText onClick={handleClick} type={type} disabled={disabled}>
        {children}
      </ButtonText>
    </ButtonBox>
  );
};

const ButtonBox = styled.div`
  width: 100%;
  text-align: right;
`;

const ButtonText = styled.button`
  color: ${(props) => (props.disabled ? "#ECEBF1" : "#04c09e")};
  background-color: transparent;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;
