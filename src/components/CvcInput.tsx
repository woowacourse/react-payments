import React from "react";
import styled from "styled-components";
import Input from "./Input";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ecebf1;
  height: 45px;
  border-radius: 7px;
  padding: 0 16px;
`;

export default function CvcInput() {
  return (
    <Wrapper>
      <Input type="password" textAlign="center" isNumber={true} maxLength={3} />
    </Wrapper>
  );
}
