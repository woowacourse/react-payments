import styles from "./PreviewCardLayout.module.css";
import PreviewCardLogo from "./PreviewCardLogo";
import PreviewCardNumber from "./PreviewCardNumber";

interface PreviewCardLayoutProps {
  cardNumbers: string[];
  cardExpirationDate: string[];
  cardType: string;
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
