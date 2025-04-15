import styles from "./PreviewCardNumber.module.css";

interface PreviewCardNumberProps {
  cardNumbers: string[];
}

export default function PreviewCardNumber({
  cardNumbers,
}: PreviewCardNumberProps) {
  // TODO : props로 변경
  const year = "23";
  const month = "12";
  return (
    <div className={styles["card-layout-number-container"]}>
      <div className={styles["card-layout-number-wrapper"]}>
        <div className={styles["card-layout-number"]}>{cardNumbers[0]}</div>
        <div className={styles["card-layout-number"]}>{cardNumbers[1]}</div>
        <div className={styles["card-layout-number"]}>
          {"·".repeat(cardNumbers[2].length)}
        </div>
        <div className={styles["card-layout-number"]}>
          {"·".repeat(cardNumbers[3].length)}
        </div>
      </div>
      <div className={styles["card-layout-expiration-number"]}>
        {year}/{month}
      </div>
    </div>
  );
}
