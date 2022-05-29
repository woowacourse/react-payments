import { COLORS } from "constants/color";
import React from "react";
import styled from "styled-components";

interface InputTitleComponent {
  children: React.ReactNode;
  isValid: boolean;
}

export const InputTitle = ({ children, isValid }: InputTitleComponent) => {
  return (
    <InputTitleStyle>
      {children} <ValidChecker isValid={isValid}>✔️</ValidChecker>
    </InputTitleStyle>
  );
};

const InputTitleStyle = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 12px;
  line-height: 14px;

  margin-bottom: 4px;

  color: ${COLORS.GRAY_300};
`;

const ValidChecker = styled.span<{ isValid: boolean }>`
  display: ${(props) => (props.isValid ? "inline" : "none")};
  margin: "0 10px";
`;
