import React from "react";
import styled from "styled-components";

export const InputTitle = ({ children, isValid }) => {
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

  color: #525252;
`;

const ValidChecker = styled.span`
  display: ${(props) => (props.isValid ? "inline" : "none")};
  margin: "0 10px";
`;
