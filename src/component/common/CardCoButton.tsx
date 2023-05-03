import { CARD_CO_NAME } from "../../CONSTANT";
import { CardCo } from "../../type";
import { GetCardCoIcon } from "../../util/getCardCoIcon";

import "./cardCoButton.css";

interface CardCoButtonProps {
  cardCo: CardCo;
  changeCardCoStatus: (
    completeState: boolean,
    value?: string,
    index?: number
  ) => void;
}

export default function CardCoButton({
  cardCo,
  changeCardCoStatus,
}: CardCoButtonProps) {
  function submitCardCo() {
    changeCardCoStatus(true, cardCo);
  }

  return (
    <button
      key={cardCo}
      className="cardCo-button"
      type="button"
      onClick={submitCardCo}
    >
      {GetCardCoIcon(cardCo)}
      <p className="cardCo-name">{CARD_CO_NAME[cardCo]}</p>
    </button>
  );
}
