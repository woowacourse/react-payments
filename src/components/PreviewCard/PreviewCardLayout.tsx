import type { CardType } from "../../hooks/useCardNumbers";
import styles from "./PreviewCardLayout.module.css";
import PreviewCardLogo from "./PreviewCardLogo";
import PreviewCardNumber from "./PreviewCardNumber";

interface PreviewCardLayoutProps {
  cardNumbers: string[];
  cardExpirationDate: {
    month: string;
    year: string;
  };
  cardType: CardType;
}

export default function PreviewCardLayout({
  cardNumbers,
  cardType,
  cardExpirationDate,
}: PreviewCardLayoutProps) {
  return (
    <div className={styles["card-layout"]}>
      <div className={styles["card-chip"]}></div>
      <PreviewCardLogo cardType={cardType} />
      <PreviewCardNumber
        cardNumbers={cardNumbers}
        cardExpirationDate={cardExpirationDate}
      />
    </div>
  );
}
