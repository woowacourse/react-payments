import { Card } from "../../types";
import CardPreview from "../CardPreview/CardPreview";

type CardListProps = {
  cards: Card[];
};

const CardList = ({ cards }: CardListProps) => {
  return (
    <div>
      {cards.map((card) => (
        <CardPreview card={card} />
      ))}
    </div>
  );
};

export default CardList;
