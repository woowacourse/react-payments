import type { Card } from '../../../domain/card/types/card';

type CardListItemProps = {
  card: Card;
};

const CardListItem = ({ card }: CardListItemProps) => {
  return (
    <div>
      <div>{card.issuerCode}</div>
      <div>{card.number.join(' ')}</div>
      <div>{card.expirationDate}</div>
    </div>
  );
};

export default CardListItem;
