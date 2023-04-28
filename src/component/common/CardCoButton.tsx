import { CardCo_NAME } from "../../CONSTANT";
import { CardCo } from "../../type";
import { GetCardCoIcon } from "../../util/getCardCoIcon";

import "./cardCoButton.css";

export default function CardCoButton(cardCo: CardCo) {
  return (
    <button key={cardCo} className="cardCo-button" type="button">
      {GetCardCoIcon(cardCo)}
      <p className="cardCo-name">{CardCo_NAME[cardCo]}</p>
    </button>
  );
}
