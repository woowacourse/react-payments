import { CardNumbers } from '@/types/CardNumbers';
import styles from '../cardDisplay.module.css';
import CardNetwork from './CardNetwork';
import getCardNetwork from './getCardNetwork';

type CardHearProps = {
  cardNumbers: CardNumbers;
};

const CardHeader = ({ cardNumbers }: CardHearProps) => {
  return (
    <div className={styles.cardHeader}>
      <div className={styles.chip}></div>
      <CardNetwork cardNetwork={getCardNetwork(cardNumbers)} />
    </div>
  );
};

export default CardHeader;
