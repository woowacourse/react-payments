import { CardExpirationDate } from '../hooks/useCardExpirationDate';
import { CardNumbers } from '../hooks/useCardNumbers';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import styles from './cardDisplay.module.css';

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
