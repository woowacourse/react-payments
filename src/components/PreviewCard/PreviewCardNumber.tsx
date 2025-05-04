import styles from "./PreviewCardNumber.module.css";
interface PreviewCardNumberProps {
  cardNumbers: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  cardExpirationDate: string[];
}

export default function PreviewCardNumber({
  cardNumbers: { first, second, third, fourth },
  cardExpirationDate: [month, year],
}: PreviewCardNumberProps) {
  const expiration = month === "" ? year : `${month} / ${year}`;

  return (
    <div className={styles["card-layout-number-container"]}>
      <div className={styles["card-layout-number-wrapper"]}>
        <div className={styles["card-layout-number"]}>{first}</div>
        <div className={styles["card-layout-number"]}>{second}</div>
        <div className={styles["card-layout-number"]}>
          {"·".repeat(third.length)}
        </div>
        <div className={styles["card-layout-number"]}>
          {"·".repeat(fourth.length)}
        </div>
      </div>
      <div className={styles["card-layout-expiration-number"]}>
        {expiration}
      </div>
    </div>
  );
}
