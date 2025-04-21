import { CARD_INFO } from "../constants/CardInfo";
import styles from "./CardPreview.module.css";

export type CardInformationType = {
  cardNumbers: string[];
  expirationDate: string[];
};

function CardPreview({ cardNumbers, expirationDate }: CardInformationType) {
  let isBrand = false;
  let brandName = "Mastercard";
  const displayCardNumbers = cardNumbers.map((number, index) => {
    if (index === 0) checkBrand(number);
    if (index <= 1) {
      return number;
    }

    return CARD_INFO.MASKING_STRING.repeat(number.length);
  });

  function checkBrand(inputCardNumber: string) {
    if (inputCardNumber.startsWith(CARD_INFO.VISA_START_NUMBER.toString())) {
      isBrand = true;
      brandName = "Visa";
      return;
    }

    if (
      CARD_INFO.MASTER_START_NUMBERS.some((startNumber) =>
        inputCardNumber.startsWith(startNumber.toString())
      )
    ) {
      isBrand = true;
      brandName = "Mastercard";
      return;
    }

    isBrand = false;
  }

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <div className={styles.goldBox}></div>
        {isBrand && (
          <img src={`./${brandName}.png`} className={styles.logoBrand} />
        )}
      </div>
      <div className={`${styles.cardNumberBox} tx-md`}>
        {displayCardNumbers.map((number) => {
          return <p className={styles.pCardNumber}>{number}</p>;
        })}
      </div>
      <p className={`${styles.pCardNumber} tx-md`}>
        {expirationDate.join(CARD_INFO.EXPIRATION_SPLIT)}
      </p>
    </div>
  );
}

export default CardPreview;
