import styles from "./AddCardPreview.module.css";
import type { CardNumberState } from "../../AddCardForm/components/CardNumber/types";
import type { ExpireDateState } from "../../AddCardForm/components/ExpireDate/types";
import PreviewCardImage from "@assets/images/preview-card.png";
import VisaCardImage from "@assets/icons/visa-card.svg";
import MasterCardImage from "@assets/icons/master-card.svg";
import Dot from "../../../../components/Dot/Dot";

const CARD_BRAND_IMAGES = {
  VISA: VisaCardImage,
  MASTERCARD: MasterCardImage,
  DEFAULT: "",
};

const getCardBrand = (cardNumber: number) => {
  if (cardNumber.toString().startsWith("4")) {
    return "VISA";
  }

  if (cardNumber >= 51 && cardNumber <= 55) {
    return "MASTERCARD";
  }

  return "DEFAULT";
};

interface AddCardPreviewProps {
  cardNumberState: CardNumberState;
  expireDate: ExpireDateState;
}

function AddCardPreview({ cardNumberState, expireDate }: AddCardPreviewProps) {
  const cardBrand = getCardBrand(Number(cardNumberState.first.value));

  return (
    <div className={styles.container}>
      <img src={PreviewCardImage} alt="카드 프리뷰" />
      {cardBrand !== "DEFAULT" && (
        <p className={styles.brand}>
          <img src={CARD_BRAND_IMAGES[cardBrand]} alt="카드 브랜드" />
        </p>
      )}
      <p className={styles.cardNumber}>
        <span>{cardNumberState.first.value}</span>
        <span>{cardNumberState.second.value}</span>
        <span className={styles.dots}>
          {Array.from({ length: cardNumberState.third.value.length }).map(
            (_, index) => (
              <Dot key={index} />
            )
          )}
        </span>
        <span className={styles.dots}>
          {Array.from({ length: cardNumberState.fourth.value.length }).map(
            (_, index) => (
              <Dot key={index} />
            )
          )}
        </span>
      </p>
      <p className={styles.expire}>
        <span>{expireDate.MM.value}</span>
        {(expireDate.MM.value || expireDate.YY.value) && <span>/</span>}
        <span>{expireDate.YY.value}</span>
      </p>
    </div>
  );
}

export default AddCardPreview;
