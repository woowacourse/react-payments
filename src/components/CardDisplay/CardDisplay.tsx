import CardExpirationDate from "../../types/CardExpirationDate";
import { CardNumbers } from "../../types/CardNumbers";
import CardBody from "./CardBody";
import styles from "./cardDisplay.module.css";
import CardHeader from "./CardHeader";

type CardDisplayProps = {
  cardNumbers: CardNumbers;
  cardExpirationDate: CardExpirationDate;
  cardOwnerName: string;
  backgroundColor?: string;
};

const CardDisplay = ({
  cardNumbers,
  cardExpirationDate,
  cardOwnerName,
  backgroundColor,
}: CardDisplayProps) => {
  return (
    <div
      className={`${styles.card} ${styles.basic}`}
      style={{ backgroundColor }}
    >
      <CardHeader cardNumbers={cardNumbers} />
      <CardBody
        cardNumbers={cardNumbers}
        cardExpirationDate={cardExpirationDate}
        cardOwnerName={cardOwnerName}
      />
    </div>
  );
};

export default CardDisplay;
