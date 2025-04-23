import { useMemo } from "react";
import { CARD_INFO } from "../constants/CardInfo";
import styles from "./CardPreview.module.css";

export type CardInformationType = {
  cardNumbers: string[];
  expirationDate: string[];
};

function CardPreview({ cardNumbers, expirationDate }: CardInformationType) {
  const { brandName } = useMemo(() => {
    const firstNumber = cardNumbers[0] ?? "";

    if (firstNumber.startsWith(CARD_INFO.VISA_START_NUMBER.toString())) {
      return { brandName: "Visa" };
    }

    const isMaster = CARD_INFO.MASTER_START_NUMBERS.some((startNumber) =>
      firstNumber.startsWith(startNumber.toString())
    );

    return {
      brandName: isMaster ? "Mastercard" : "",
    };
  }, [cardNumbers]);

  const displayCardNumbers = useMemo(() => {
    return cardNumbers.map((number, index) => {
      if (index <= 1) return number;
      return CARD_INFO.MASKING_STRING.repeat(number.length);
    });
  }, [cardNumbers]);

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <div className={styles.goldBox}></div>
        {brandName !== "" && (
          <img
            src={`./${brandName}.png`}
            alt={`${brandName} logo`}
            className={styles.logoBrand}
          />
        )}
      </div>
      <div className={`${styles.cardNumberBox} tx-md`}>
        {displayCardNumbers.map((number, i) => (
          <p key={i} className={styles.pCardNumber}>
            {number}
          </p>
        ))}
      </div>
      <p className={`${styles.pCardNumber} tx-md`}>
        {expirationDate.join(CARD_INFO.EXPIRATION_SPLIT)}
      </p>
    </div>
  );
}

export default CardPreview;
