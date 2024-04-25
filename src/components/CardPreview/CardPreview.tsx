import styles from "./CardPreview.module.css";
import {
  CARD_BRAND,
  MASK_START_INDEX,
  SYMBOLS,
} from "../../constants/cardInfo";
import { memo } from "react";
import { getCardbrand } from "@/utils/card";

interface CardPreviewProps {
  cardNumbers: { first: string; second: string; third: string; fourth: string };
  expirationDate: { month: string; year: string };
  ownerName: { ownerName: string };
  cardCompany: string;
  CVC: string;
  face: "front" | "back";
}

const getCardCompanyClass = (cardCompany: string) => {
  // console.log(cardCompany);
  return styles[cardCompany];
};

const CardPreview = memo(
  ({
    cardNumbers,
    expirationDate,
    ownerName,
    cardCompany,
    CVC,
    face,
  }: CardPreviewProps) => {
    const brand = getCardbrand(cardNumbers.first);
    const cardCompanyClass = getCardCompanyClass(cardCompany);
    console.log(CVC, face);

    return (
      <div className={`${styles.container} ${cardCompanyClass}`}>
        <div className={styles.cardHeader}>
          <div className={styles.chip} />
          {brand && (
            <img
              src={CARD_BRAND[brand].logo}
              className={styles.brandLogo}
            ></img>
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

          <div className={styles.ownerName}>{ownerName.ownerName}</div>
        </div>
      </div>
    );
  },
  (prev, next) => {
    if (prev.cardNumbers.first !== next.cardNumbers.first) return false;
    if (prev.cardNumbers.second !== next.cardNumbers.second) return false;
    if (prev.cardNumbers.third !== next.cardNumbers.third) return false;
    if (prev.cardNumbers.fourth !== next.cardNumbers.fourth) return false;

    if (prev.expirationDate.month !== next.expirationDate.month) return false;
    if (prev.expirationDate.year !== next.expirationDate.year) return false;

    if (prev.ownerName.ownerName !== next.ownerName.ownerName) return false;

    if (prev.CVC !== next.CVC) return false;
    if (prev.cardCompany !== next.cardCompany) return false;

    return true;
  }
);

export default CardPreview;
