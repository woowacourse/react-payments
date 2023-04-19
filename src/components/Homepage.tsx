import React from "react";
import styled from "styled-components";
import AddCardButton from "./AddCardButton";

const Page = styled.div`
  width: 375px;
  border: 1px solid;
  min-height: 100vh;
  padding: 20px 36px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: #383838;
`;

const AddInformation = styled.h4`
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  color: #575757;
  opacity: 0.9;
  margin-top: 33px;
  margin-bottom: 9px;
`;

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 46px;
`;

export default function Homepage() {
  return (
    <Page>
      <Title>보유카드</Title>
      <AddInformation>새로운 카드를 등록해주세요.</AddInformation>
      <CardWrapper>
        <AddCardButton />
        <AddCardButton />
      </CardWrapper>
    </Page>
  );
}
