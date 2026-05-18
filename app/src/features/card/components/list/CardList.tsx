import styled from "@emotion/styled";
import CardItem from "./CardItem";

export default function CardList({ cards }) {
  return (
    <CardListContainer>
      {cards.map((cardData) => (
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
