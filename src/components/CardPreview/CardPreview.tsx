import { CARD_VALIDATION_INFO } from '../../constants/cardValidationInfo';
import styles from './CardPreview.module.css';

type CardPreviewProps = {
  cardNumbers: string[];
  month: string;
  year: string;
};

const VISA_CARD_CONDITION = 4;
const MASTER_CARD_CONDITIONS = ['51', '52', '53', '54', '55'];
const HIDDEN_CARD_NUMBER_CONDITIONS = [2, 3];

const CardPreview = ({ cardNumbers, month, year }: CardPreviewProps) => {
  const isVisaCard = VISA_CARD_CONDITION === Number(cardNumbers[0][0]);
  const isMasterCard = MASTER_CARD_CONDITIONS.some((condition) =>
    cardNumbers[0].startsWith(condition)
  );
  const isHiddenCardIndex = (index: number) =>
    HIDDEN_CARD_NUMBER_CONDITIONS.includes(index);

  return (
    <div className={styles.preview}>
      <img src="./magnetic.png" alt="magnetic" className={styles.magnetic} />
      {isVisaCard && (
        <img src="./Visa.png" alt="visa" className={styles.visa} />
      )}
      {isMasterCard && (
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
