import styles from "./CardPreview.module.css";
import { CardValidationInfo } from "../../constants/CardValidationInfo";

type CardPreviewProps = {
  cardNumbers: string[];
  month: string;
  year: string;
};

const CardPreview = ({ cardNumbers, month, year }: CardPreviewProps) => {
  return (
    <div className={styles.preview}>
      <img src="./magnetic.png" alt="magnetic" className={styles.magnetic} />
       {Number(cardNumbers[0][0]) ===  CardValidationInfo.VISA_CARD_START_NUMBER&& <img src="./Visa.png" alt="visa" className={styles.visa} />} 
       {(Number(cardNumbers[0].slice(0,2)) >= CardValidationInfo.MASTER_CARD_MIN_START_NUMBER && Number(cardNumbers[0].slice(0,2)) <= CardValidationInfo.MASTER_CARD_MAX_START_NUMBER) && <img src="./Mastercard.png" alt="visa" className={styles.visa} />} 
      <div className={styles.cardInfo}>
        <div className={styles.cardNumberContainer}>
          {cardNumbers.map((number, index) => (
            <span key={index} data-testid={`card-number-${index}`}>
              {index === 2 || index === 3
                ? number
                  ? "•".repeat(number.length).padEnd(CardValidationInfo.CARD_MAX_LENGTH, " ")
                  : "    "
                : number
                ? number.padEnd(CardValidationInfo.CARD_MAX_LENGTH, " ")
                : "    "}
            </span>
          ))}
        </div>
        <div className={styles.date}>
          <p>
            {month}{month.length === CardValidationInfo.EXPIRE_DATE_MAX_LENGTH && '/'}{year}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
