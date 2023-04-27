import React from "react";
import styled from "styled-components";

interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button = (props: ButtonType) => {
  return <ButtonWrapper {...props}>{props.text}</ButtonWrapper>;
};

const ButtonWrapper = styled.button`
  align-self: flex-end;
  width: 30px;

  font-weight: 700;
  font-size: 14px;
  color: black;
  text-decoration: none;

  background: transparent;
  border: none;

  :active {
    opacity: 50%;
    transform: scale(0.98);
  }
`;

export default Button;
