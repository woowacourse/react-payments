import type { CardListResponse } from "@/api/cards";
import styled from "@emotion/styled";
import Button from "../common/Button";
import CardListItem from "./CardListItem";

interface CardListSuccessProps {
  cards: CardListResponse;
  onAddCard: () => void;
  onDeleteCard: (cardId: string) => void;
}

const CardListSuccess = ({
  cards,
  onAddCard,
  onDeleteCard,
}: CardListSuccessProps) => {
  return (
    <Container>
      <List>
        {cards.map((card) => (
          <CardListItem
            key={card.id}
            card={card}
            onDelete={() => onDeleteCard(card.id)}
          />
        ))}
      </List>
      <AddButtonWrapper>
        <Button fullWidth dashed onClick={onAddCard}>
          +카드추가
        </Button>
      </AddButtonWrapper>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 1rem;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const AddButtonWrapper = styled.div`
  margin-top: 1rem;
`;

export default CardListSuccess;
