import React from "react";
import styled from "styled-components";
import { textAlign, buttonType } from "types";

interface ButtonComponent {
  children: React.ReactNode;
  onClick: () => void;
  disabled: boolean;
  type: buttonType;
  textAlign: textAlign;
}

export const Button = ({
  children,
  onClick,
  disabled,
  type,
  textAlign,
}: ButtonComponent) => {
  return (
    <ButtonBox textAlign={textAlign}>
      <ButtonText onClick={onClick} type={type} disabled={disabled}>
        {children}
      </ButtonText>
    </ButtonBox>
  );
};

const ButtonBox = styled.div<{ textAlign: textAlign }>`
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
