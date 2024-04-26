import styles from "./CardPreviewFront.module.css";
import { CARD_BRAND, MASK_START_INDEX, SYMBOLS } from "@/constants/cardInfo";
import { getCardbrand } from "@/utils/card";

interface CardPreviewFrontProps {
  cardNumbers: Record<string, string>;
  expirationDate: Record<string, string>;
  ownerName: string;
}

const CardPreviewFront = ({
  cardNumbers,
  expirationDate,
  ownerName,
}: CardPreviewFrontProps) => {
  const brand = getCardbrand(cardNumbers.first);

  return (
    <div className={styles.container}>
      <div className={styles.cardHeader}>
        <div className={styles.chip} />
        {brand && (
          <img src={CARD_BRAND[brand].logo} className={styles.brandLogo}></img>
        )}
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardNumbers}>
          {Object.entries(cardNumbers).map(([name, cardNumber], index) => {
            const isMask = index >= MASK_START_INDEX;

            return (
              <span
                key={name}
                className={`${styles.cardNumber} ${isMask && styles.mask}`}
              >
                {index >= MASK_START_INDEX
                  ? SYMBOLS.mask.repeat(cardNumber.length)
                  : cardNumber}
              </span>
            );
          })}
        </div>

        <div className={styles.expirationDate}>
          {`${expirationDate.month}${(expirationDate.month || expirationDate.year) && SYMBOLS.slash}${expirationDate.year}`}
        </div>

        <div className={styles.ownerName}>{ownerName}</div>
      </div>
    </div>
  );
};

export default CardPreviewFront;
