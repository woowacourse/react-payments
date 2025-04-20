import styles from "./AddCardPreview.module.css";
import type { CardNumberState } from "../../AddCardForm/components/CardNumber/types";
import type { ExpireDateState } from "../../AddCardForm/components/ExpireDate/types";
import VisaCardImage from "@assets/icons/visa-card.svg";
import MasterCardImage from "@assets/icons/master-card.svg";
import Dot from "@components/Dot/Dot";
import { getCardBrand } from "../utils";
import { CardType } from "@/pages/addCard/types";
import { CVCState } from "../../AddCardForm/components/CVC/hooks/useControlledCVC";
import { CARD_TYPE_COLOR } from "@/pages/addCard/constants";

const CARD_BRAND_IMAGES = {
  VISA: VisaCardImage,
  MASTERCARD: MasterCardImage,
  DEFAULT: "",
};

interface AddCardPreviewProps {
  cardType: CardType | null;
  cardNumberState: CardNumberState;
  expireDate: ExpireDateState;
  CVCState: CVCState;
}

function AddCardPreview({
  cardNumberState,
  cardType,
  expireDate,
  CVCState,
}: AddCardPreviewProps) {
  const cardBrand = getCardBrand(Number(cardNumberState.first.value));
  const cardTypeColor = cardType ? CARD_TYPE_COLOR[cardType] : "#333";

  return (
    <div
      className={styles.previewCard}
      style={{ backgroundColor: cardTypeColor }}
    >
      <div className={styles.previewHeader}>
        <p className={styles.chip} />
        {cardBrand !== "DEFAULT" && (
          <p>
            <img src={CARD_BRAND_IMAGES[cardBrand]} alt="카드 브랜드" />
          </p>
        )}
      </div>
      <div className={styles.cardNumber}>
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
      </div>
      <div className={styles.expire}>
        <span>{expireDate.MM.value}</span>
        {(expireDate.MM.value || expireDate.YY.value) && <span>/</span>}
        <span>{expireDate.YY.value}</span>
      </div>
    </div>
  );
}

export default AddCardPreview;
