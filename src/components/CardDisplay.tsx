import CardHeader from './CardHeader';
import CardBody from './CardBody';
import styles from './cardDisplay.module.css';
import { CardNumbers } from '../types/CardNumbers';
import CardExpirationDate from '../types/CardExpirationDate';

type CardDisplayProps = {
  cardNumbers: CardNumbers;
  cardExpirationDate: CardExpirationDate;
};

const CardDisplay = ({ cardNumbers, cardExpirationDate }: CardDisplayProps) => {
  return (
    <div className={`${styles.card} ${styles.basic}`}>
      <CardHeader cardNumbers={cardNumbers} />
      <CardBody
        cardNumbers={cardNumbers}
        cardExpirationDate={cardExpirationDate}
      />
    </div>
  );
};

export default CardDisplay;
