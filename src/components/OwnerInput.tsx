import React from "react";
import styled from "styled-components";
import Input from "./Input";

const Wrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  background-color: #ecebf1;
  height: 45px;
  border-radius: 7px;
  padding-left: 8px;
`;

export default function OwnerInput() {
  return (
    <Wrapper>
      <Input
        type="text"
        maxLength={30}
        id="owner"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
      />
    </Wrapper>
  );
}
