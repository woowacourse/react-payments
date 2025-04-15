import styles from "./PreviewCardLayout.module.css";
import PreviewCardLogo from "./PreviewCardLogo";
import PreviewCardNumber from "./PreviewCardNumber";

interface PreviewCardLayoutProps {
  cardNumbers: string[];
  cardExpirationDate: string[];
}

export default function PreviewCardLayout({
  cardNumbers,
  cardExpirationDate,
}: PreviewCardLayoutProps) {
  return (
    <div className={styles["card-layout"]}>
      <div className={styles["card-chip"]}></div>
      <PreviewCardLogo />
      <PreviewCardNumber
        cardNumbers={cardNumbers}
        cardExpirationDate={cardExpirationDate}
      />
    </div>
  );
}
