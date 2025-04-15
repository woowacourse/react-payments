import styles from "./CardNumber.module.css";

export default function CardNumber() {
  // TODO : props로 변경
  const year = "23";
  const month = "12";
  return (
    <div className={styles["card-layout-number-container"]}>
      <div className={styles["card-layout-number-wrapper"]}>
        <div className={styles["card-layout-number"]}>1111</div>
        <div className={styles["card-layout-number"]}>2222</div>
        <div className={styles["card-layout-number"]}>····</div>
        <div className={styles["card-layout-number"]}>····</div>
      </div>
      <div className={styles["card-layout-expiration-number"]}>
        {year}/{month}
      </div>
    </div>
  );
}
