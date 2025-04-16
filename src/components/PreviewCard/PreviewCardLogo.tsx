import styles from "./PreviewCardLogo.module.css";

interface PreviewCardLogoProps {
  cardType?: string;
}

export default function PreviewCardLogo({
  cardType = "default",
}: PreviewCardLogoProps) {
  return (
    <img className={styles["card-logo"]} src={cardLogoImagePath(cardType)} />
  );
}

function cardLogoImagePath(cardType: string) {
  return `./${cardType}-logo.png`;
}
