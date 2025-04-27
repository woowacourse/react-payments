import { CardType } from "../../hooks/useCardNumber/useCardNumberState";
import styles from "./PreviewCardLayout.module.css";
import PreviewCardLogo from "./PreviewCardLogo";
import PreviewCardNumber from "./PreviewCardNumber";
import { CARD_COMPANY_INFO } from "../../hooks/useCardCompany/useCardCompanyState";

interface PreviewCardLayoutProps {
  selectedCompany: string;
  cardNumbers: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  cardExpirationDate: string[];
  cardType: CardType;
}

export default function PreviewCardLayout({
  selectedCompany,
  cardNumbers,
  cardType,
  cardExpirationDate,
}: PreviewCardLayoutProps) {
  const matchedCompany = CARD_COMPANY_INFO.find(
    (company) => company.value === selectedCompany
  );
  const cardColor = matchedCompany?.color ?? "black";

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
