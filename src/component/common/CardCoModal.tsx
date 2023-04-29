import { DialogHTMLAttributes } from "react";
import { CardCo, EachUserInputState } from "../../type";
import CardCoButton from "./CardCoButton";

import "./cardCoModal.css";

interface CardCoModalProps extends DialogHTMLAttributes<HTMLDialogElement> {
  cardCoList: CardCo[];
  changeCardCoStatus: (
    key: keyof EachUserInputState,
    value: any,
    index?: number
  ) => void;
}

export default function CardCoModal({
  cardCoList,
  changeCardCoStatus,
}: CardCoModalProps) {
  return (
    <>
      <div className="cardCo-modal-background"></div>
      <div className="cardCo-modal-container">
        <div className="cardCo-button-container">
          {cardCoList.map((cardCo) =>
            CardCoButton({ cardCo, changeCardCoStatus })
          )}
        </div>
      </div>
    </>
  );
}
