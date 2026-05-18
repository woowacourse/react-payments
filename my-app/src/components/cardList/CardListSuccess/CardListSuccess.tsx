import type { CardListItem } from "../../../apis/cards";

import AddCardButton from "../../AddCardButton/AddCardButton.tsx";
import CardRow from "../CardRow/CardRow.tsx";

type Props = {
  cards: CardListItem[];
  onDelete: () => void;
};

const CardListSuccess = ({ cards, onDelete }: Props) => {
  return (
    <div>
      <h2>보유 카드 ({cards.length})</h2>
      <ul>
        {cards.map((card) => (
          <CardRow key={card.id} card={card} onDelete={onDelete} />
        ))}
      </ul>
      <AddCardButton variant="outline" />
    </div>
  );
};

export default CardListSuccess;
