import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  cursor: pointer;
  border: 0;
  background-color: transparent;
  font-size: 14px;
  font-weight: 700;
`;

export default function NextButton() {
  return <Wrapper>다음</Wrapper>;
}
