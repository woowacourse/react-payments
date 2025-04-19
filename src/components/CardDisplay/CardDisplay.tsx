import CardExpirationDate from '@/types/CardExpirationDate';
import { CardNumbers } from '@/types/CardNumbers';
import CardBody from './CardBody';
import styles from './cardDisplay.module.css';
import CardHeader from './CardHeader';

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
