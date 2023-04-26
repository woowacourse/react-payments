import styled from "styled-components";
import { BackButton } from "../components/common/backButton";
import { Header } from "../components/common/Header";
import { AddCardSection } from "../components/addCardSection";
import { CardInfoProvider } from "../contexts/cardInfo";
import { ReactComponent as BackButtonIc } from "../assets/backButtonIc.svg";

export function AddCard() {
  return (
    <Wrapper>
      <Header>
        <BackButtonIc />
        카드추가
      </Header>
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
