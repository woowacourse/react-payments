import CardExpirationDate from '../types/CardExpirationDate';
import { CardNumbers } from '../types/CardNumbers';
import CardNumberDisplay from './CardNumberDisplay';
import styles from './cardDisplay.module.css';

type CardBodyProps = {
  cardNumbers: CardNumbers;
  cardExpirationDate: CardExpirationDate;
};

const CardBody = ({ cardNumbers, cardExpirationDate }: CardBodyProps) => {
  return (
    <div className={styles.cardBody}>
      <div className={styles.cardNumber}>
        {Object.values(cardNumbers).map((cardNumber, index) => (
          <CardNumberDisplay
            key={index}
            cardNumber={String(cardNumber)}
            isMasked={index > 1}
          />
        ))}
      </div>
      {cardExpirationDate.month && (
        <span>{`${cardExpirationDate.month}/${cardExpirationDate.year}`}</span>
      )}
    </div>
  );
};

export default CardBody;
