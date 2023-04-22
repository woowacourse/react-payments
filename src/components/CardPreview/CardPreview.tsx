import styles from './CardPreview.module.css';

type CardPreviewProps = {
  cardNumber: string;
  cardOwnerName: string;
  cardExpirationDate: string;
};

const CardPreview = ({ cardNumber, cardOwnerName, cardExpirationDate }: CardPreviewProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.chip} />
        <span className={styles.cardNumber}>{cardNumber}</span>
        <div className={styles.wrap}>
          <span className={styles.word}>{cardOwnerName}</span>
          <span className={styles.word}>{cardExpirationDate}</span>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
