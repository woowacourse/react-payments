import styles from './CardPreview.module.css';

type CardPreviewProps = {
  cardNumber: string;
  cardOwnerName: string;
  cardExpirationDate: string;
  image?: string;
};

const CardPreview = ({ cardNumber, cardOwnerName, cardExpirationDate, image }: CardPreviewProps) => {
  console.log('image', image);

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
    </div>
  );
};

export default CardPreview;
