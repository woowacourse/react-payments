import { CreditCard } from "../../../type";
import CardPreview from "../../common/CardPreview";

import "./cardPreviewBox.css";

interface CardPreviewBoxProps {
  card: CreditCard;
}

export default function CardPreviewBox({ card }: CardPreviewBoxProps) {
  return (
    <div className="card-preview-box">
      <CardPreview card={card} />
      <p className="card-nick">{card.nickName}</p>
    </div>
  );
}
