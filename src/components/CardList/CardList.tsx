import type { Card } from "../../pages/CardListPage";
import AddCardButton from "./AddCardButton";
import RegisteredCardInfo from "./RegisteredCardInfo";

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
