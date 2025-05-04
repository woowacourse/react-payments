import {
  CARD_NUMBER_RULE,
  EXPIRYDATE_RULE,
} from '../../constants/cardValidationRule';
import { useCardFormContext } from '../../context/CardFormContext';
import styles from './CardPreview.module.css';

const HIDDEN_CARD_NUMBER_INDEX = [2, 3];

const CardPreview = () => {
  const { cardNumbers, expiryDate, cardBrand } = useCardFormContext();

  const isVisaCard = () => {
    return (
      CARD_NUMBER_RULE.VISA_START_NUMBER === Number(cardNumbers.numbers[0][0])
    );
  };
  const isMasterCard = () => {
    return (
      Number(cardNumbers.numbers[0].slice(0, 2)) >=
        CARD_NUMBER_RULE.MASTER_MIN_NUMBER &&
      Number(cardNumbers.numbers[0].slice(0, 2)) <=
        CARD_NUMBER_RULE.MASTER_MAX_NUMBER
    );
  };
  const isHiddenCardIndex = (index: number) =>
    HIDDEN_CARD_NUMBER_INDEX.includes(index);

  return (
    <div className={`${styles.preview} ${styles[cardBrand.brand]}`}>
      <img src="./magnetic.png" alt="magnetic" className={styles.magnetic} />

      {isVisaCard() && (
        <img src="./Visa.png" alt="visa" className={styles.visa} />
      )}
      {isMasterCard() && (
        <img src="./Mastercard.png" alt="master" className={styles.master} />
      )}

      <div className={styles.cardInfo}>
        <div className={styles.cardNumberContainer}>
          {cardNumbers.numbers.map((number, index) => (
            <span key={index} data-testid={`card-number-${index}`}>
              {isHiddenCardIndex(index) ? '•'.repeat(number.length) : number}
            </span>
          ))}
        </div>

        <div className={styles.date}>
          <p>
            {expiryDate.date.month}
            {expiryDate.date.month.length === EXPIRYDATE_RULE.DATE_MAX_LENGTH &&
              '/'}
            {expiryDate.date.year}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
