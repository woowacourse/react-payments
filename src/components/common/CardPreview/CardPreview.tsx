import styles from './CardPreview.module.css';

type CardPreviewProps = {
  cardIssuer: string;
  cardNumber: string;
  cardOwnerName: string;
  cardExpirationDate: string;
  image?: string;
  cardName?: string;
};

const CardPreview = ({
  cardIssuer,
  cardName,
  cardNumber,
  cardOwnerName,
  cardExpirationDate,
  image,
}: CardPreviewProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.card} style={{ background: `url(${image})` }}>
        <span className={styles['issuer-name']}>{cardIssuer}</span>
        <div className={styles.chip} />
        <span className={styles['card-number']}>{cardNumber}</span>
        <div className={styles['name-date-container']}>
          <span className={styles['owner-name']} title={cardOwnerName}>
            {cardOwnerName}
          </span>
          <span className={styles['expiration-date']}>{cardExpirationDate}</span>
        </div>
      </div>
      <div className={styles['card-name']} title={cardName}>
        {cardName}
      </div>
    </div>
  );
};

export default CardPreview;
