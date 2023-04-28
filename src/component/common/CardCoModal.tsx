import { DialogHTMLAttributes } from "react";
import { CardCo } from "../../type";
import CardCoButton from "./CardCoButton";

import "./cardCoModal.css";

interface CardCoModalProps extends DialogHTMLAttributes<HTMLDialogElement> {
  cardCoList: CardCo[];
}

export default function CardCoModal({ cardCoList }: CardCoModalProps) {
  return (
    <>
      <div className="cardCo-modal-background"></div>
      <div className="cardCo-modal-container">
        <div className="cardCo-button-container">
          {cardCoList.map((cardCo) => CardCoButton(cardCo))}
        </div>
      </div>
    </>
  );
}
