import { CreditCard } from "../../type";
import styles from "./CardPreview.module.css";

interface CardPreviewProps {
  card: CreditCard;
}

export default function CardPreview(props: CardPreviewProps) {
  const { card } = props;

  const previewNumber = card.cardNumber.map((number, index) => {
    return 1000 > number && number > 9999
      ? "   "
      : index === 1 || index === 2
      ? " **** "
      : ` ${number} `;
  });

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
