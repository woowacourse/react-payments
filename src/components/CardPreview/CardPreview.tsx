import { useCardContext } from "../../contexts/CardContext";
import { CARD_VALIDATION_INFO } from "../../constants/CardValidationInfo";
import styles from "./CardPreview.module.css";

const CardPreview = () => {
  const { cardNumbers, month, year } = useCardContext();

  return (
    <div className={styles.preview}>
      <img src="./magnetic.png" alt="magnetic" className={styles.magnetic} />

      {Number(cardNumbers[0][0]) ===
        CARD_VALIDATION_INFO.VISA_CARD_START_NUMBER && (
        <img src="./Visa.png" alt="visa" className={styles.visa} />
      )}

      {Number(cardNumbers[0].slice(0, 2)) >=
        CARD_VALIDATION_INFO.MASTER_CARD_MIN_START_NUMBER &&
        Number(cardNumbers[0].slice(0, 2)) <=
          CARD_VALIDATION_INFO.MASTER_CARD_MAX_START_NUMBER && (
          <img src="./Mastercard.png" alt="mastercard" className={styles.visa} />
        )}

      <div className={styles.cardInfo}>
        <div className={styles.cardNumberContainer}>
          {cardNumbers.map((number, index) => (
            <span key={index} data-testid={`card-number-${index}`}>
              {index === 2 || index === 3
                ? number
                  ? "•"
                      .repeat(number.length)
                      .padEnd(CARD_VALIDATION_INFO.CARD_MAX_LENGTH, " ")
                  : "    "
                : number
                  ? number.padEnd(CARD_VALIDATION_INFO.CARD_MAX_LENGTH, " ")
                  : "    "}
            </span>
          ))}
        </div>
        <div className={styles.date}>
          <p>
            {month}
            {month.length === CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH && "/"}
            {year}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
