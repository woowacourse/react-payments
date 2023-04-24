import styles from "./CardPreview.module.css";
import { CreditCard } from "../../type/CreditCard";

interface Props {
  card: CreditCard;
}

export default function CardPreview(props: Props) {
  const { card: { number, name, date } } = props;

  const cardNumber = number.map((part, index) => {
    if (index === 0 || index === 3) return part + ' '.repeat(4 - part.length);
    else return '·'.repeat(part.length) + ' '.repeat(4 - part.length);
  });

  return (
    <div className={styles.container}>
      <div className={styles.chip}></div>
      <div className={styles.numberContainer}>
        {cardNumber.map((numberPart) => <span className={styles.number}>{numberPart}</span>)}
      </div>
      <div className={styles.nameDateContainer}>
        <span className={styles.name}>{name.length ? name.slice(0, 12) : "NAME"}</span>
        <span className={styles.expireDate}>{date.length ? date : "MM/YY"}</span>
      </div>
    </div>
  );
}
