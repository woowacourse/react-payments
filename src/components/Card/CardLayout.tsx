import styles from "./CardLayout.module.css";
import CardLogo from "./CardLogo";
import CardNumber from "./CardNumber";

export default function CardLayout() {
  return (
    <div className={styles["card-layout"]}>
      <div className={styles["card-chip"]}></div>
      <CardLogo />
      <CardNumber />
    </div>
  );
}
