import styles from "./PreviewCardNumber.module.css";
import type { CardKey, ExpirationKey } from "../../types/cardKeyTypes";

interface PreviewCardNumberProps {
  cardNumbers: Record<CardKey, string>;
  cardExpirationDate: Record<ExpirationKey, string>;
}

export default function PreviewCardNumber({
  cardNumbers,
  cardExpirationDate,
}: PreviewCardNumberProps) {
  const expiration =
    cardExpirationDate.MONTH === ""
      ? `${cardExpirationDate.YEAR}`
      : `${cardExpirationDate.YEAR}/${cardExpirationDate.MONTH}`;

  return (
    <div className={styles["card-layout-number-container"]}>
      <div className={styles["card-layout-number-wrapper"]}>
        <div className={styles["card-layout-number"]}>{cardNumbers.FIRST}</div>
        <div className={styles["card-layout-number"]}>{cardNumbers.SECOND}</div>
        <div className={styles["card-layout-number"]}>
          {"·".repeat(cardNumbers.THIRD.length)}
        </div>
        <div className={styles["card-layout-number"]}>
          {"·".repeat(cardNumbers.FOURTH.length)}
        </div>
      </div>
      <div className={styles["card-layout-expiration-number"]}>
        {expiration}
      </div>
    </div>
  );
}
