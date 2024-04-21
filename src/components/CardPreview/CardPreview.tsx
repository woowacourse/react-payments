import styles from "./CardPreview.module.css";
import { CARD_BRAND, MASK_START_INDEX, SYMBOLS } from "../../constants/cardInfo";
type Brand = "visa" | "master" | null;

interface CardPreviewProps {
  cardNumbers: { first: string; second: string; third: string; fourth: string };
  expirationDate: { month: string; year: string };
  ownerName: { ownerName: string };
}

const getCardbrand = (firstCardNumber: string): Brand => {
  const { visa, master } = CARD_BRAND;

  if (firstCardNumber.startsWith(visa.startNumber.toString())) return "visa";

  if (
    Number(firstCardNumber.slice(0, 2)) >= master.startNumber &&
    Number(firstCardNumber.slice(0, 2)) <= master.endNumber
  )
    return "master";

  return null;
};

const CardPreview = ({ cardNumbers, expirationDate, ownerName }: CardPreviewProps) => {
  const brand = getCardbrand(cardNumbers.first);

  return (
    <div className={styles.container}>
      <div className={styles.cardHeader}>
        <div className={styles.chip} />
        {brand && <img src={CARD_BRAND[brand].logo} className={styles.brandLogo}></img>}
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardNumbers}>
          {Object.entries(cardNumbers).map(([name, cardNumber], index) => {
            const isMask = index >= MASK_START_INDEX;

            return (
              <span key={name} className={`${styles.cardNumber} ${isMask && styles.mask}`}>
                {index >= MASK_START_INDEX ? SYMBOLS.mask.repeat(cardNumber.length) : cardNumber}
              </span>
            );
          })}
        </div>

        <div className={styles.expirationDate}>
          {`${expirationDate.month}${SYMBOLS.slash}${expirationDate.year}`}
        </div>

        <div className={styles.ownerName}>{ownerName.ownerName}</div>
      </div>
    </div>
  );
};

export default CardPreview;
