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
`;

const InputWrapper = styled.div`
  width: 40px;
`;

const Slash = styled.span`
  position: relative;
  left: 3px;
  margin: 0 5px;
  font-size: 18px;
  font-weight: 500;
  color: #737373;
`;
export default function ExpiracyInput() {
  return (
    <Wrapper>
      <InputWrapper>
        <Input
          type="text"
          maxLength={2}
          id="expiracy"
          isNumber={true}
          placeholder="MM"
          textAlign="center"
        />
      </InputWrapper>
      <Slash>/</Slash>
      <InputWrapper>
        <Input
          type="text"
          maxLength={2}
          isNumber={true}
          placeholder="YY"
          textAlign="center"
        />
      </InputWrapper>
    </Wrapper>
  );
}
