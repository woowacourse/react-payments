import styled from "@emotion/styled";
import CardItem from "./CardItem";
import type { Card } from "../../types";

export default function CardList({
  cards,
  handleDeleteCard,
}: {
  cards: Card[];
  handleDeleteCard: (id: string) => void;
}) {
  return (
    <CardListContainer>
      {cards.map((cardData: Card) => (
        <CardItem
          cardData={cardData}
          key={cardData.id}
          handleDeleteCard={handleDeleteCard}
        />
      ))}
    </CardListContainer>
  );
}

const CardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
