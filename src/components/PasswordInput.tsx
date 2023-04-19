import React from "react";
import styled from "styled-components";
import Input from "./Input";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 7px;
  align-items: center;
  gap: 7px;
`;

const GrayWrapper = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 8px;
  width: 45px;
  height: 45px;
  border-radius: 7px;
  background-color: #ecebf1;
`;

const WhiteWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 7px;
`;

export default function PasswordInput() {
  return (
    <Wrapper>
      <GrayWrapper>
        <Input
          isNumber={true}
          maxLength={1}
          id="password"
          type="password"
          textAlign="center"
        />
      </GrayWrapper>
      <GrayWrapper>
        <Input
          isNumber={true}
          maxLength={1}
          id="password"
          type="password"
          textAlign="center"
        />
      </GrayWrapper>
      <WhiteWrapper>•</WhiteWrapper>
      <WhiteWrapper>•</WhiteWrapper>
    </Wrapper>
  );
}
