import styles from "./PreviewCardLayout.module.css";
import PreviewCardLogo from "./PreviewCardLogo";
import PreviewCardNumber from "./PreviewCardNumber";
import type { CardKey, ExpirationKey } from "../../types/cardKeyTypes";
import { getCardType } from "../../utils/getCardType";
import { CARD_BRAND_INFO } from "../../constants/CardBrandInfo";

interface PreviewCardLayoutProps {
  cardBrand: string;
  cardNumbers: Record<CardKey, string>;
  cardExpirationDate: Record<ExpirationKey, string>;
}

export default function PreviewCardLayout({
  cardBrand,
  cardNumbers,
  cardExpirationDate,
}: PreviewCardLayoutProps) {
  const backgroundColor = CARD_BRAND_INFO[cardBrand]?.color;

  return (
    <div className={styles["card-layout"]} style={{ backgroundColor }}>
      <div className={styles["card-chip"]}></div>
      <PreviewCardLogo cardType={getCardType(cardNumbers.FIRST)} />
      <PreviewCardNumber
        cardNumbers={cardNumbers}
        cardExpirationDate={cardExpirationDate}
      />
    </div>
  );
}
