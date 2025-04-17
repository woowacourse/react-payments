import { CardNumbers } from '../hooks/useCardNumbers';

import styles from './cardDisplay.module.css';

import masterCard from '../public/mastercard.png';
import visa from '../public/visa.png';

type CardNetworkProps = {
  cardNumbers: CardNumbers;
};

const CardNetwork = ({ cardNumbers }: CardNetworkProps) => {
  const getCardNetworkState = (number: string) => {
    if (number === '4') {
      return 'visa';
    }
    if (number === '5') {
      return 'master';
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

export default CardNetwork;
