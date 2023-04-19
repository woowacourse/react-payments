import styled from "styled-components";
import { PAGE_HEADER } from "../constants/index";
import { Card } from "../components/common/card";

export function CardList() {
  const cards = []; //card.length === 0 이면 h3 없어도 됨
  return (
    <CardListContainer>
      <Header>
        <h2>{PAGE_HEADER.CARD_LIST}</h2>
      </Header>
      <Section>
        <h3>{cards.length === 0 ? "새로운 카드를 추가하세요 " : ""}</h3>
        <Card></Card>
        <Button>+</Button>
      </Section>
    </CardListContainer>
  );
}

const CardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: 2rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: start;
  height: 5.6rem;

  font-size: 2rem;
  margin: 2rem;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  gap: 3rem;
  font-size: 1.4rem;
`;

const Button = styled.button`
  background: #e5e5e5;
  border-radius: 5px;

  width: 21.3rem;
  height: 13.3rem;

  font-size: 3rem;
`;
