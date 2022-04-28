import React from "react";
import styled from "styled-components";

const Button = ({ children, type = "button", name }) => {
  return (
    <Container type={type} name={name}>
      {children}
    </Container>
  );
};

const Container = styled.button`
  width: 44px;
  height: 44px;
  color: #04c09e;
  font-size: 14px;
  font-weight: 700;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
export default Button;
