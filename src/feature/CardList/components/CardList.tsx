import { useNavigate } from 'react-router-dom';
import Button from '../../../common/components/Button';
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
      <Button value="+ 카드 추가" onClick={handleMoveToRegisterClick} />
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

export default CardList;
