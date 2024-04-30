import styles from "./CardPreview.module.css";

const CardBackPreview = ({ cardCVC }: { cardCVC: string }) => {
  return (
    <div className={styles.card_back}>
      <div className={styles.cvc_line}>
        <div className={styles.cvc_number}>{cardCVC}</div>
      </div>
    </div>
  );
};

export default CardBackPreview;
