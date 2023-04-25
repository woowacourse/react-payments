import styled from "styled-components";
import { AddCardForm } from "../components/addCardForm";
import { Card } from "../components/common/card";
import { CardInfoProvider } from "../contexts/cardInfo";
import { BackButton } from "../components/common/backButton";
import { Header } from "../components/common/Header";

export function AddCard() {
  return (
    <Wrapper>
      <Header title="카드 추가" render={() => BackButton()} />
      <CardInfoProvider>
        <Card />
        <AddCardForm />
      </CardInfoProvider>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
