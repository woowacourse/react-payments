import styles from "./CardPreview.module.css";

type CardPreviewProps = {
  cardNumber: string;
  cardOwnerName: string;
  expirationDate: string;
  selectedCard: string;
  onClick?: () => void;
};

const CardPreview = ({
  cardNumber,
  cardOwnerName,
  expirationDate,

  onClick,
}: CardPreviewProps) => {
  return (
    <article className={styles.container} onClick={onClick}>
      <section className={styles.card}>
        <div>
          <div className={styles.chip} />
        </div>
        <div className={styles.cardNumberBox}>
          <span className={styles.cardNumber}>{cardNumber}</span>
        </div>
        <div className={styles.wrap}>
          <span className={styles.word}>{cardOwnerName}</span>
          <span className={styles.word}>{expirationDate}</span>
        </div>
      </section>
    </article>
  );
};

export default CardPreview;
