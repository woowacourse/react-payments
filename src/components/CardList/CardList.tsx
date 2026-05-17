import type { Card } from "../../pages/CardListPage";

interface Props {
  cards: Card[];
  onDelete: () => void;
}

export default function CardList({ cards, onDelete }: Props) {
  return (
    <div>
      {cards.map((card) => (
        <RegisteredCardInfo key={card.id} card={card} onDelete={onDelete} />
      ))}
      <AddCardButton />
    </div>
  );
}
