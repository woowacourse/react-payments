import { DialogHTMLAttributes } from "react";

import CardCoButton from "./CardCoButton";

import { CardCo } from "../../type";

import "./cardCoModal.css";

interface CardCoModalProps extends DialogHTMLAttributes<HTMLDialogElement> {
  cardCoList: CardCo[];
  changeCardCoStatus: (
    completeState: boolean,
    value?: string,
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
      <div className="cardCo-modal-container" style={{ margin: 0 }}>
        <div className="cardCo-button-container">
          {cardCoList.map((cardCo) =>
            CardCoButton({ cardCo, changeCardCoStatus })
          )}
        </div>
      </div>
    </>
  );
}
