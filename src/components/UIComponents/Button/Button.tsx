import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 70px;
  height: 30px;

  border: none;
  background-color: inherit;

  color: #04c09e;
  font-size: 16px;
  line-height: 16px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

type Props = {
  children: string;
};

export default function Button({ children: buttonText, ...props }: Props) {
  return (
    <StyledButton type="submit" {...props}>
      {buttonText}
    </StyledButton>
  );
}
