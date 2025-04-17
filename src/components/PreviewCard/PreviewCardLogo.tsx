import styles from "./PreviewCardLogo.module.css";

interface PreviewCardLogoProps {
  cardType?: string;
}

const DEFAULT_CARD_TYPE = "default" as const;

export default function PreviewCardLogo({
  cardType = DEFAULT_CARD_TYPE,
}: PreviewCardLogoProps) {
  return (
    <img className={styles["card-logo"]} src={cardLogoImagePath(cardType)} />
  );
}

function cardLogoImagePath(cardType: string) {
  if (cardType === "default") return;
  return `./${cardType}-logo.png`;
}
