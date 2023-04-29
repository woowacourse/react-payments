import { CreditCard } from "../../type";
import { colorMatch } from "../../util/colorMatch";
import "./cardPreview.css";

interface CardPreviewProps {
  card: CreditCard;
  openCardCoModal?: () => void;
}

export default function CardPreview({
  card,
  openCardCoModal,
}: CardPreviewProps) {
  const { cardCo, cardNumber, expirationDate, owner } = card;
  const previewNumber = cardNumber.map((number, index) => {
    return 1000 > number && number > 9999
      ? "   "
      : index === 1 || index === 2
      ? " **** "
      : ` ${number} `;
  });

  const { backgroundColor, color } = colorMatch[cardCo];

  console.log(cardCo, backgroundColor, color);
  return (
    <div
      className="card-preview-container"
      onClick={openCardCoModal}
      style={{ backgroundColor: backgroundColor }}
    >
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
