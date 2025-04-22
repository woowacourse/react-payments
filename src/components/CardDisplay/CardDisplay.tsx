import CardExpirationDate from '@/types/CardExpirationDate';
import { CardNumbers } from '@/types/CardNumbers';
import CardBody from './CardBody/CardBody';
import styles from './cardDisplay.module.css';
import CardHeader from './CardHeader/CardHeader';

type CardDisplayProps = {
  cardNumbers: CardNumbers;
  cardExpirationDate: CardExpirationDate;
  cardCompany: string;
};

const CardDisplay = ({
  cardNumbers,
  cardExpirationDate,
  cardCompany,
}: CardDisplayProps) => {
  return (
    <div
      className={`${styles.card} ${styles.basic} ${
        cardCompany && styles[cardCompany]
      }`}
    >
      <CardHeader cardNumbers={cardNumbers} />
      <CardBody
        cardNumbers={cardNumbers}
        cardExpirationDate={cardExpirationDate}
      />
    </div>
  );
};

export default CardDisplay;
