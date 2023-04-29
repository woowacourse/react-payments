import { CardCo_NAME } from "../../CONSTANT";
import { CardCo } from "../../type";
import { GetCardCoIcon } from "../../util/getCardCoIcon";

import "./cardCoButton.css";

interface CardCoButtonProps {
  cardCo: CardCo;
  closeCardCoModal: () => void;
}

export default function CardCoButton({
  cardCo,
  closeCardCoModal,
}: CardCoButtonProps) {
  return (
    <button
      key={cardCo}
      className="cardCo-button"
      type="button"
      onClick={closeCardCoModal}
    >
      {GetCardCoIcon(cardCo)}
      <p className="cardCo-name">{CardCo_NAME[cardCo]}</p>
    </button>
  );
}
