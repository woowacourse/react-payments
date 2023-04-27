import cardImages from '../../images/cardBackground/cardImages';
import styles from './CardPreview.module.css';

type CardPreviewProps = {
  cardNumber: string;
  cardOwnerName: string;
  expirationDate: string;
  selectedCard: string;
  onClick?: () => void;
};

const CardPreview = ({ cardNumber, cardOwnerName, expirationDate, selectedCard, onClick }: CardPreviewProps) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.card} style={{ backgroundImage: `url(${cardImages[selectedCard]})` }}>
        <div className={styles.chip} />
        <span className={styles.cardNumber}>{cardNumber}</span>
        <div className={styles.wrap}>
          <span className={styles.word}>{cardOwnerName}</span>
          <span className={styles.word}>{expirationDate}</span>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
