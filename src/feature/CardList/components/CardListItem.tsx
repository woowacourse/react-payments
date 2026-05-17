import type { Card } from '../../../domain/card/types/card';

type CardListItemProps = {
  card: Card;
  handleDeleteCard: (cardId: string) => void;
};

const CardListItem = ({ card, handleDeleteCard }: CardListItemProps) => {
  return (
    <div>
      <div>{card.issuerCode}</div>
      <div>{card.number.join(' ')}</div>
      <div>{card.expirationDate}</div>
      <button onClick={() => handleDeleteCard(card.id)}>X</button>
    </div>
  );
};

export default CardListItem;
