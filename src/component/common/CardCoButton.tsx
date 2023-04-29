import { CardCo_NAME } from "../../CONSTANT";
import { CardCo, EachUserInputState } from "../../type";
import { GetCardCoIcon } from "../../util/getCardCoIcon";

import "./cardCoButton.css";

interface CardCoButtonProps {
  cardCo: CardCo;
  changeCardCoStatus: (
    key: keyof EachUserInputState,
    value: any,
    index?: number
  ) => void;
}

export default function CardCoButton({
  cardCo,
  changeCardCoStatus,
}: CardCoButtonProps) {
  function submitCardCo() {
    changeCardCoStatus("isComplete", true);
    changeCardCoStatus("userInput", cardCo);
  }

  return (
    <button
      key={cardCo}
      className="cardCo-button"
      type="button"
      onClick={submitCardCo}
    >
      {GetCardCoIcon(cardCo)}
      <p className="cardCo-name">{CardCo_NAME[cardCo]}</p>
    </button>
  );
}
