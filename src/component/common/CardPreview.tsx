import { CARD_CO_NAME } from "../../CONSTANT";
import { CreditCard } from "../../type";
import { colorMatch } from "../../util/colorMatch";
import "./cardPreview.css";

interface CardPreviewProps {
  card: CreditCard;
  style?: object;
  openCardCoModal?: () => void;
  className?: string;
}

export default function CardPreview({
  card,
  openCardCoModal,
  style,
  className,
}: CardPreviewProps) {
  const { cardCo, cardNumber, expirationDate, owner } = card;

  const previewNumber =
    cardNumber.length === 4 &&
    cardNumber.every((number) => number.length === 4) &&
    cardNumber.join(" ");

  const { backgroundColor, color } = colorMatch[cardCo];
  const cardCoName = CARD_CO_NAME[cardCo];

  return (
    <div
      className={`card-preview-container ${className}`}
      onClick={openCardCoModal}
      style={{ ...{ backgroundColor: backgroundColor }, ...style }}
    >
      <p className="card-preview-card-co" style={{ color: color }}>
        {cardCoName}
      </p>
      <div className="card-preview-chip"></div>

      <p className="card-preview-number" style={{ color: color }}>
        {previewNumber}
      </p>
      <span className="card-preview-name" style={{ color: color }}>
        {owner !== "" ? owner.slice(0, 15) : "NAME"}
      </span>
      <span className="card-preview-expireDate" style={{ color: color }}>
        {expirationDate !== "" ? expirationDate : "MM/YY"}
      </span>
    </div>
  );
}
