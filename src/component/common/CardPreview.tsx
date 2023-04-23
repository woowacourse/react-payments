import { CreditCard } from "../../type";
import styles from "./CardPreview.module.css";

interface Props {
  card: CreditCard;
}

export default function CardPreview(props: Props) {
  const { card } = props;

  const previewNumber =
    card.number && card.number[0] + "****".repeat(2) + card.number[3];

  const previewOwner = card.name && card.name.slice(0, 15);

  return (
    <div className={styles.container}>
      <div className={styles.chip}></div>
      <p className={styles.number}>{previewNumber ?? ""}</p>
      <span className={styles.name}>{previewOwner ?? "NAME"}</span>
      <span className={styles.expireDate}>{card.date ?? "MM/YY"}</span>
    </div>
  );
}
