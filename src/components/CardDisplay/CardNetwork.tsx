import styles from "./cardDisplay.module.css";

import { CardNumbers } from "../../types/CardNumbers";
import Visa from "../../public/visa.png";
import MasterCard from "../../public/mastercard.png";

type CardNetworkProps = {
  cardNumbers: CardNumbers;
};


const CARD_NETWORKS  = {
  Visa: {
    image: Visa
  },
  Master: {
    image: MasterCard
  }
};

type CardNetwork = 'Visa' | 'Master' | 'Unknown';

const getCardNetwork = (number: string): CardNetwork => {
  const prefix = parseInt(number.slice(0, 2), 10);

  if (prefix >= 40 && prefix <= 49) { // 문제없이 visa를 찾음!
    return 'Visa';
  }
  if (prefix >= 51 && prefix <= 55) { // 문제없이 master를 찾음!
    return 'Master';
  }
  return 'Unknown';
};

const CardNetwork = ({ cardNumbers }: CardNetworkProps) => {


  const cardNetwork = getCardNetwork(
    String(cardNumbers.firstNumber).slice(0, 2),
  );

  if (cardNetwork === 'Unknown') {
    return null;
  }

  return (
    <img
      src={CARD_NETWORKS[cardNetwork].image}
      alt="mastercard"
      className={styles.cardNetwork}
    />
  );
};

export default CardNetwork;
