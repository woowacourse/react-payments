import styles from "./PreviewCardLayout.module.css";
import PreviewCardLogo from "./PreviewCardLogo";
import PreviewCardNumber from "./PreviewCardNumber";

interface PreviewCardLayoutProps {
  cardNumbers: string[];
}

export default function PreviewCardLayout({
  cardNumbers,
}: PreviewCardLayoutProps) {
  return (
    <div className={styles["card-layout"]}>
      <div className={styles["card-chip"]}></div>
      <PreviewCardLogo />
      <PreviewCardNumber cardNumbers={cardNumbers} />
    </div>
  );
}
