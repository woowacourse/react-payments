import { CreditCard } from "../../type";
import "./CardPreview.css";

interface CardPreviewProps {
  card: CreditCard;
  openCardCoModal?: () => void;
}

export default function CardPreview({
  card,
  openCardCoModal,
}: CardPreviewProps) {
  const previewNumber = card.cardNumber.map((number, index) => {
    return 1000 > number && number > 9999
      ? "   "
      : index === 1 || index === 2
      ? " **** "
      : ` ${number} `;
  });

  return (
    <div className="card-preview-container" onClick={openCardCoModal}>
      <div className="card-preview-chip"></div>
      <p className="card-preview-number">{previewNumber}</p>
      <span className="card-preview-name">
        {card.owner !== "" ? card.owner.slice(0, 15) : "NAME"}
      </span>
      <span className="card-preview-expireDate">
        {card.expirationDate !== "" ? card.expirationDate : "MM/YY"}
      </span>
    </div>
  );
}
