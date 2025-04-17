import styles from './cardDisplay.module.css';

import masterCard from '../public/mastercard.png';
import visa from '../public/visa.png';
import { CardNumbers } from '../types/CardNumbers';

type CardNetworkProps = {
  cardNumbers: CardNumbers;
};

const CARD_NETWORKS = [
  {
    prefixes: ['40', '41', '42', '43', '44', '45', '46', '47', '48', '49'],
    name: 'visa',
    image: visa,
  },
  {
    prefixes: ['51', '52', '53', '54', '55'],
    name: 'master',
    image: masterCard,
  },
];

const CardNetwork = ({ cardNumbers }: CardNetworkProps) => {
  const getCardNetwork = (number: string) => {
    return CARD_NETWORKS.find((network) => network.prefixes.includes(number));
  };

  const cardNetwork = getCardNetwork(
    String(cardNumbers.firstNumber).slice(0, 2)
  );

  if (!cardNetwork) {
    return null;
  }

  return (
    <img
      src={cardNetwork.image}
      alt="mastercard"
      className={styles.cardNetwork}
    />
  );
};

export default CardNetwork;
