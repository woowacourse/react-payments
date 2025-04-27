import { CARD_VALIDATION_INFO } from '../../constants/cardValidationInfo';
import { useCardFormContext } from '../../context/CardFormContext';
import styles from './CardPreview.module.css';

const VALID_VISA_CARD_START_NUMBER = 4;
const VALID_MASTER_CARD_START_NUMBER = ['51', '52', '53', '54', '55'];
const HIDDEN_CARD_NUMBER_INDEX = [2, 3];

const CardPreview = () => {
  const { cardNumbers, month, year, brand } = useCardFormContext();
  console.log('CardPreview', cardNumbers, month, year, brand);

  const isVisaCard = () => {
    return VALID_VISA_CARD_START_NUMBER === Number(cardNumbers[0][0]);
  };
  const isMasterCard = () => {
    return VALID_MASTER_CARD_START_NUMBER.some((condition) =>
      cardNumbers[0].startsWith(condition)
    );
  };
  const isHiddenCardIndex = (index: number) =>
    HIDDEN_CARD_NUMBER_INDEX.includes(index);

  return (
    <div className={`${styles.preview} ${styles[brand]}`}>
      <img src="./magnetic.png" alt="magnetic" className={styles.magnetic} />
      {isVisaCard() && (
        <img src="./Visa.png" alt="visa" className={styles.visa} />
      )}
      {isMasterCard() && (
        <img src="./Mastercard.png" alt="visa" className={styles.visa} />
      )}
      <div className={styles.cardInfo}>
        <div className={styles.cardNumberContainer}>
          {cardNumbers.map((number, index) => (
            <span key={index} data-testid={`card-number-${index}`}>
              {isHiddenCardIndex(index) ? '•'.repeat(number.length) : number}
            </span>
          ))}
        </div>
        <div className={styles.date}>
          <p>
            {month}
            {month.length === CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH &&
              '/'}
            {year}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
