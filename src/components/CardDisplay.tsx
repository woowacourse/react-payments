import { CardExpirationDate } from '../hooks/useCardExpirationDate';
import { CardNumbers } from '../hooks/useCardNumbers';
import styles from './cardDisplay.module.css';

import masterCard from '../public/mastercard.png';
import visa from '../public/visa.png';

type CardDisplayProps = {
  cardNumbers: CardNumbers;
  cardExpirationDate: CardExpirationDate;
};

type CardNetworkProps = {
  cardNumbers: CardNumbers;
};

const CardNetwork = ({ cardNumbers }: CardNetworkProps) => {
  const getCardNetworkState = (number: string) => {
    if (number === '4') {
      return 'master';
    }
    if (number === '5') {
      return 'visa';
    }
  };
  const cardNetworkState = getCardNetworkState(
    String(cardNumbers.firstNumber)[0]
  );

  if (cardNetworkState === 'master') {
    return (
      <img src={masterCard} alt="mastercard" className={styles.cardNetwork} />
    );
  }

  if (cardNetworkState === 'visa') {
    return <img src={visa} alt="visa" className={styles.cardNetwork} />;
  }
};

const CardDisplay = ({ cardNumbers, cardExpirationDate }: CardDisplayProps) => {
  return (
    <div className={`${styles.card} ${styles.basic}`}>
      <div className={styles.cardHeader}>
        <div className={styles.chip}></div>
        <CardNetwork cardNumbers={cardNumbers} />
      </div>
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
