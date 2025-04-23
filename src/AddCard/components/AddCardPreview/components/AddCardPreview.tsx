import styles from "./AddCardPreview.module.css";
import type { CardNumberState } from "../../AddCardForm/components/CardNumber/types";
import type { ExpireDateState } from "../../AddCardForm/components/ExpireDate/types";
import Dot from "@components/Dot/Dot";
import getCardBrand from "../utils/getCardBrand";
import getTextColorForBackground from "../utils/getTextColorForBackground";
import { CARD_BRAND_IMAGES } from "../constants";
import { Brand } from "../../AddCardForm/components/CardBrand/types";
import { CARD_BRAND_COLOR } from "../../AddCardForm/components/CardBrand/constants";

interface AddCardPreviewProps {
  cardNumberState: CardNumberState;
  expireDate: ExpireDateState;
  selectedBrand: Brand | null;
}

function AddCardPreview({
  cardNumberState,
  expireDate,
  selectedBrand,
}: AddCardPreviewProps) {
  const cardBrand = getCardBrand(cardNumberState.first.value);

  const cardColor = selectedBrand ? CARD_BRAND_COLOR[selectedBrand] : "#A0A0A0";
  const textColor = selectedBrand
    ? getTextColorForBackground(CARD_BRAND_COLOR[selectedBrand])
    : "#FFFFFF";
  return (
    <div className={styles.previewCard} style={{ backgroundColor: cardColor }}>
      <div className={styles.previewHeader}>
        <p className={styles.chip} />
        {cardBrand !== "DEFAULT" && (
          <p>
            <img src={CARD_BRAND_IMAGES[cardBrand]} alt="카드 브랜드" />
          </p>
        )}
      </div>
      <div className={styles.cardNumber} style={{ color: textColor }}>
        <span>{cardNumberState.first.value}</span>
        <span>{cardNumberState.second.value}</span>
        <span className={styles.dots}>
          {Array.from({ length: cardNumberState.third.value.length }).map(
            (_, index) => (
              <Dot key={index} style={{ backgroundColor: textColor }} />
            )
          )}
        </span>
        <span className={styles.dots}>
          {Array.from({ length: cardNumberState.fourth.value.length }).map(
            (_, index) => (
              <Dot key={index} style={{ backgroundColor: textColor }} />
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
