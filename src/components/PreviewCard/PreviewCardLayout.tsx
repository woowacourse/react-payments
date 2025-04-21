import type { CardType } from "../../hooks/useCardNumbers";
import styles from "./PreviewCardLayout.module.css";
import PreviewCardLogo from "./PreviewCardLogo";
import PreviewCardNumber from "./PreviewCardNumber";
import useCardCompany from "../../hooks/useCardCompany";
import { CARD_COMPANY } from "../../hooks/useCardCompany";

interface PreviewCardLayoutProps {
  selectedCompany: string;
  cardNumbers: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  cardExpirationDate: {
    month: string;
    year: string;
  };
  cardType: CardType;
}

export default function PreviewCardLayout({
  selectedCompany,
  cardNumbers,
  cardType,
  cardExpirationDate,
}: PreviewCardLayoutProps) {
  const matchedCompany = CARD_COMPANY.find(
    (company) => company.value === selectedCompany
  );
  const cardColor = matchedCompany?.color ?? "black"; // 기본값은 black

  return (
    <div
      className={styles["card-layout"]}
      style={{ backgroundColor: cardColor }}
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
