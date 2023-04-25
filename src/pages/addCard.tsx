import styled from "styled-components";
import { BackButton } from "../components/common/backButton";
import { Header } from "../components/common/Header";
import { AddCardSection } from "../components/addCardSection";
import { CardInfoProvider } from "../contexts/cardInfo";

export function AddCard() {
  return (
    <Wrapper>
      <Header title="카드 추가" render={() => BackButton()} />
      <CardInfoProvider>
        <AddCardSection />
      </CardInfoProvider>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
