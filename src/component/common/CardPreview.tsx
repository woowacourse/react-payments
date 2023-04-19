import styles from "./CardPreview.module.css";

interface CreditCard {
  name?: string;
  date?: string;
  bank?: string;
  number?: number[];
  securityCode?: number;
  password?: number;
}

interface Props {
  card: CreditCard;
}

export default function CardPreview(props: Props) {
  const { card } = props;

  return (
    <div className={styles.container}>
      <div className={styles.chip}></div>
      <p className={styles.number}>{card.number ?? "1111 1111 1111 1111"}</p>
      <span className={styles.name}>{card.name ?? "NAME"}</span>
      <span className={styles.expireDate}>{card.date ?? "MM/YY"}</span>
    </div>
  );
}
