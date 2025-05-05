import { useCardContext } from "../../contexts/CardContext";
import { CARD_VALIDATION_INFO } from "../../constants/cardValidationInfo";
import styles from "./CardPreview.module.css";

const displayCardNumber = (blockValue: string, index: number) => {
  const isMasked = index === 2 || index === 3;
  const maxLength = CARD_VALIDATION_INFO.CARD_MAX_LENGTH;

  if (blockValue === "") {
    return "    ";
  }

  if (isMasked) {
    return "•".repeat(blockValue.length).padEnd(maxLength, " ");
  }

  return blockValue.padEnd(maxLength, " ");
};

const CardPreview = () => {
  const { formValues } = useCardContext();
  const { cardNumbers, expirationDate, cardColor } = formValues;

  const firstDigit = Number(cardNumbers[0][0]);
  const firstTwoDigits = Number(cardNumbers[0].slice(0, 2));

  return (
    <div className={styles.preview} style={{ backgroundColor: cardColor }}>
      <img src="./magnetic.png" alt="magnetic" className={styles.magnetic} />

      {firstDigit === CARD_VALIDATION_INFO.VISA_CARD_START_NUMBER && (
        <img src="./Visa.png" alt="visa" className={styles.visa} />
      )}

      {firstTwoDigits >= CARD_VALIDATION_INFO.MASTER_CARD_MIN_START_NUMBER &&
        firstTwoDigits <= CARD_VALIDATION_INFO.MASTER_CARD_MAX_START_NUMBER && (
          <img
            src="./Mastercard.png"
            alt="mastercard"
            className={styles.visa}
          />
        )}

      <div className={styles.cardInfo}>
        <div className={styles.cardNumberContainer}>
          {cardNumbers.map((number, index) => (
            <span key={index} data-testid={`card-number-${index}`}>
              {displayCardNumber(number, index)}
            </span>
          ))}
        </div>
        <div className={styles.date}>
          <p>
            {expirationDate.month}
            {expirationDate.month.length ===
              CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH && "/"}
            {expirationDate.year}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
