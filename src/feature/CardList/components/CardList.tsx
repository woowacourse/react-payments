import { useNavigate } from 'react-router-dom';
import Button from '../../../common/components/Button';
import type { Card } from '../../../domain/card/types/card';
import CardListItem from './CardListItem';

type CardListProps = {
  cards: Card[];
};

const CardList = ({ cards }: CardListProps) => {
  const navigate = useNavigate();

  const handleMoveToRegisterClick = () => {
    navigate('/register');
  };

  return (
    <>
      {cards.map((card) => (
        <CardListItem key={card.id} card={card} />
      ))}
      <Button value="+ 카드 추가" onClick={handleMoveToRegisterClick} />
    </>
  );
};

export default CardList;
