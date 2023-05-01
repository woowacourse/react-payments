import styled from "styled-components";
import { BackButton } from "../components/common/button/backButton";
import { Header } from "../components/common/Header";
import { AddCardSection } from "../components/addCardSection";
import { CardInfoProvider } from "../contexts/cardInfo";
import { PAGE_HEADER } from "../constants";

export function AddCardPage() {
  return (
    <Wrapper>
      <Header>
        <BackButton />
        {PAGE_HEADER.ADD_CARD}
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

const Test = styled.div`
  width: 10rem;
  height: 10rem;
  background-color: black;
`;
