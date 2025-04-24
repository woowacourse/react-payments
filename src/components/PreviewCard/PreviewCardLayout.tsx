import styles from "./PreviewCardLayout.module.css";
import PreviewCardLogo from "./PreviewCardLogo";
import PreviewCardNumber from "./PreviewCardNumber";
import type { CardKey, ExpirationKey } from "../../types/cardKeyTypes";

interface PreviewCardLayoutProps {
  cardBrand: string;
  cardNumbers: Record<CardKey, string>;
  cardExpirationDate: Record<ExpirationKey, string>;
  cardType: string;
}

export default function PreviewCardLayout({
  cardBrand,
  cardNumbers,
  cardType,
  cardExpirationDate,
}: PreviewCardLayoutProps) {
  return (
    <div
      className={`${styles["card-layout"]} ${getCardBrandClassName(cardBrand)}`}
    >
      <div className={styles["card-chip"]}></div>
      <PreviewCardLogo cardType={cardType} />
      <PreviewCardNumber
        cardNumbers={cardNumbers}
        cardExpirationDate={cardExpirationDate}
      />
    </div>
  );
}

const getCardBrandClassName = (cardBrand: string) => {
  if (cardBrand === "신한카드") return styles["shinhan"];
  if (cardBrand === "BC카드") return styles["BC"];
  if (cardBrand === "카카오뱅크") return styles["kakao"];
  if (cardBrand === "현대카드") return styles["hyundai"];
  if (cardBrand === "우리카드") return styles["woori"];
  if (cardBrand === "롯데카드") return styles["lotte"];
  if (cardBrand === "하나카드") return styles["hana"];
  if (cardBrand === "국민카드") return styles["kookmin"];
  return "";
};
