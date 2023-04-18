import { CardType } from "../types/card";
import Card from "./common/Card";

interface CardProps {
  card: CardType;
}

export const CardItem = ({ card }: CardProps) => {
  return (
    <Card backgroundColor={card.color}>
      <div></div>
    </Card>
  );
};
