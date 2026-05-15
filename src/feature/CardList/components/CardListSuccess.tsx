import styled from 'styled-components';

import type {CardResponse} from '@/domain/card/cardApi.types';
import CardListItem from './CardListItem';

type CardListSuccessProps = {
  cards: CardResponse[];
  onAddCard: () => void;
  onDeleteCard: (id: string) => void;
};

const CardListSuccess = ({cards, onAddCard, onDeleteCard}: CardListSuccessProps) => {
  return (
    <Container>
      <List>
        {cards.map((card) => (
          <CardListItem key={card.id} card={card} onDeleteCard={onDeleteCard} />
        ))}
      </List>
      <AddCardButton onClick={onAddCard}>+ 카드 추가</AddCardButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const AddCardButton = styled.button`
  width: 100%;
  height: 40px;
  color: #8c8c8c;
  border: 1px dashed #e6e6e6;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 700;
`;

export default CardListSuccess;
