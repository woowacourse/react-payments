import React from "react";
import styled from "styled-components";

const AskMark = () => {
  return <AskMarkContainer>?</AskMarkContainer>;
};

const AskMarkContainer = styled.button`
  width: 27px;
  height: 27px;
  border: 1px solid #bababa;
  border-radius: 50%;
  color: #bababa;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    color: #04c09e;
    border-color: #04c09e;
  }
  &:active {
    color: #04c09e;
    border-color: #04c09e;
  }
`;

export default AskMark;
