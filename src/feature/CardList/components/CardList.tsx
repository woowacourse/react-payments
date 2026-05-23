import { useNavigate } from 'react-router-dom';
import type { Card } from '../../../domain/card/types/card';
import CardListItem from './CardListItem';
import styled from 'styled-components';

type CardListProps = {
  cards: Card[];
  handleDeleteCard: (cardId: string) => void;
};

const CardList = ({ cards, handleDeleteCard }: CardListProps) => {
  const navigate = useNavigate();

  const handleMoveToRegisterClick = () => {
    navigate('/register');
  };

  return (
    <Wrapper>
      {cards.map((card) => (
        <CardListItem
          key={card.id}
          card={card}
          handleDeleteCard={handleDeleteCard}
        />
      ))}
      <AddCardButton onClick={handleMoveToRegisterClick}>
        + 카드 추가
      </AddCardButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  gap: 16px;

  width: 100%;
`;

const AddCardButton = styled.button`
  width: 100%;
  height: 40px;

  border: 1px dashed #d9d9d9;
  border-radius: 4px;

  color: #8a8a8a;
  font-size: 12px;
  font-weight: 600;

  cursor: pointer;
`;

export default CardList;
