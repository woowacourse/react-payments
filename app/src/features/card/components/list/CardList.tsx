import styled from "@emotion/styled";
import CardItem from "./CardItem";
import type { Card } from "../../types";

export default function CardList({ cards }: { cards: Card[] }) {
  return (
    <CardListContainer>
      {cards.map((cardData: Card) => (
        <CardItem cardData={cardData} key={cardData.id} />
      ))}
    </CardListContainer>
  );
}

const CardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
