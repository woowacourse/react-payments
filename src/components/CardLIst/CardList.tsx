import { Card } from "../../types";
import CardPreview from "../CardPreview/CardPreview";

type CardListProps = {
  cards: Card[];
};

const CardList = ({ cards }: CardListProps) => {
  return (
    <ul>
      {cards.map((card) => {
        const { cardNumber, ownerName, expirationDate } = card;
        return <CardPreview card={{ cardNumber, ownerName, expirationDate }} />;
      })}
    </ul>
  );
};

export default CardList;
