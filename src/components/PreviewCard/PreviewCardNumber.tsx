import styles from "./PreviewCardNumber.module.css";
interface PreviewCardNumberProps {
  cardNumbers: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  cardExpirationDate: {
    month: string;
    year: string;
  };
}

export default function PreviewCardNumber({
  cardNumbers,
  cardExpirationDate,
}: PreviewCardNumberProps) {
  const { month, year } = cardExpirationDate;

  const expiration = month === "" ? year : `${year}/${month}`;

  return (
    <div className={styles["card-layout-number-container"]}>
      <div className={styles["card-layout-number-wrapper"]}>
        <div className={styles["card-layout-number"]}>{cardNumbers.first}</div>
        <div className={styles["card-layout-number"]}>{cardNumbers.second}</div>
        <div className={styles["card-layout-number"]}>
          {"·".repeat(cardNumbers.third.length)}
        </div>
        <div className={styles["card-layout-number"]}>
          {"·".repeat(cardNumbers.fourth.length)}
        </div>
      </div>
      <div className={styles["card-layout-expiration-number"]}>
        {expiration}
      </div>
    </div>
  );
}
