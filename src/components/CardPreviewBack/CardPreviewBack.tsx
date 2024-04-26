import styles from "./CardPreviewBack.module.css";

const CardPreviewBack = ({ CVC }: { CVC: string }) => {
  return (
    <div className={styles.container}>
      <div className={styles.CVC}>{CVC}</div>
    </div>
  );
};

export default CardPreviewBack;
