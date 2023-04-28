import { ButtonHTMLAttributes } from "react";

import { CardCo_NAME } from "../../CONSTANT";
import { CardCo } from "../../type";
import { GetCardCoIcon } from "../../util/getCardCoIcon";

import "./cardCo.css";

interface CardCoIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  cardCo: CardCo;
}
export default function BankIcon({ cardCo }: CardCoIconProps) {
  return (
    <button className="cardCo-button" type="button">
      {GetCardCoIcon(cardCo)}
      <p className="cardCo-name">{CardCo_NAME[cardCo]}</p>
    </button>
  );
}
