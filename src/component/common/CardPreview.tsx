import { CreditCard } from "../../type";
import styles from "./CardPreview.module.css";

interface Props {
  card: CreditCard;
}

export default function CardPreview(props: Props) {
  const { card } = props;

  const previewNumber =
    card.cardNumber.length === 0
      ? " "
      : `${card.cardNumber[0]} **** **** ${card.cardNumber[3]}`;
  return (
    <div className={styles.container}>
      <div className={styles.chip}></div>
      <p className={styles.number}>{previewNumber}</p>
      <span className={styles.name}>
        {card.owner !== "" ? card.owner.slice(0, 15) : "NAME"}
      </span>
      <span className={styles.expireDate}>
        {card.expirationDate !== "" ? card.expirationDate : "MM/YY"}
      </span>
    </div>
  );
}
