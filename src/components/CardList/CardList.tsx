import type { Card } from "../../pages/CardListPage";
import AddCardButton from "./AddCardButton";
import RegisteredCardInfo from "./RegisteredCardInfo";
import styled from "@emotion/styled";

interface Props {
  cards: Card[];
  onDelete: () => void;
}

export default function CardList({ cards, onDelete }: Props) {
  return (
    <CardListContainer>
      {cards.map((card) => (
        <RegisteredCardInfo key={card.id} card={card} onDelete={onDelete} />
      ))}
      <AddCardButton />
    </CardListContainer>
  );
}

const CardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  gap: 16px;
`;
