import { CardExpirationDate } from '../hooks/useCardExpirationDate';
import { CardNumbers } from '../hooks/useCardNumbers';
import styles from './cardDisplay.module.css';

type CardDisplayProps = {
  cardNumbers: CardNumbers;
  cardExpirationDate: CardExpirationDate;
};

const CardDisplay = ({ cardNumbers, cardExpirationDate }: CardDisplayProps) => {
  return (
    <div className={`${styles.card} ${styles.basic}`}>
      <div className={styles.chip}></div>
      <div className={styles.cardData}>
        <div className={styles.cardNumber}>
          <span>{cardNumbers.firstNumber}</span>
          <span>{cardNumbers.secondNumber}</span>
          <span>{'*'.repeat(String(cardNumbers.thirdNumber).length)}</span>
          <span>{'*'.repeat(String(cardNumbers.fourthNumber).length)}</span>
        </div>
        {cardExpirationDate.month && (
          <span>{`${cardExpirationDate.month}/${cardExpirationDate.year}`}</span>
        )}
      </div>
    </div>
  );
};

export default CardDisplay;
