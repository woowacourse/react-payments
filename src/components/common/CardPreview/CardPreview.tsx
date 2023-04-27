import styles from './CardPreview.module.css';

type CardPreviewProps = {
  cardName?: string;
  cardNumber: string;
  cardOwnerName: string;
  cardExpirationDate: string;
  image?: string;
};

const CardPreview = ({ cardName, cardNumber, cardOwnerName, cardExpirationDate, image }: CardPreviewProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.card} style={{ background: `url(${image})` }}>
        <div className={styles.chip} />
        <span className={styles['card-number']}>{cardNumber}</span>
        <div className={styles['name-date-container']}>
          <span className={styles['owner-name']}>{cardOwnerName}</span>
          <span className={styles['expiration-date']}>{cardExpirationDate}</span>
        </div>
      </div>
      <div className={styles['card-name']}>{cardName}</div>
    </div>
  );
};

export default CardPreview;
