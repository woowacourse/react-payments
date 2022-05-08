import useModal from "hooks/useModal";
import React from "react";
import { CardColor, CardInfo, CardName } from "types/cardInfo";

import CardSelectModal from "./CardSelectModal";

interface CardProps {
  cardInfo: CardInfo;
  shouldShowTypeSelection?: boolean;
  size?: "big" | "small";
  marginBottom?: string;
  pointer?: boolean;
  onClickCard?: (id: number) => void;
  onChangeCardType?: (name: CardName, color: CardColor) => void;
}

export default function Card({
  cardInfo,
  shouldShowTypeSelection = false,
  size = "small",
  marginBottom,
  pointer = true,
  onClickCard,
  onChangeCardType,
}: CardProps) {
  const { cardNumbers, expirationDate, userName, cardType } = cardInfo;
  const { isModalOpened, openModal, closeModal } = useModal(true);

  return (
    <>
      <div
        className="card-box flex-center"
        style={{ marginBottom, cursor: pointer ? "pointer" : "auto" }}
        onClick={() => onClickCard?.(cardInfo.id)}
      >
        <div
          className={`${size}-card flex-column-center`}
          style={{ backgroundColor: cardType.color }}
          onClick={openModal}
        >
          <div className="card-top">
            <span className="card-text">{cardType.name}</span>
            <span className="card-text">
              <span className="card-expiration-date">{expirationDate.month || "MM"}</span> /{" "}
              <span className="card-expiration-date">{expirationDate.year || "YY"}</span>
            </span>
          </div>
          <div className="card-middle">
            <div className={`${size}-card__chip`}></div>
          </div>
          <div className="card-bottom flex-column-horizontal-center">
            <div className="card-text card-numbers-text">
              {cardNumbers.map((cardNumber, index) => (
                <span className="card-number" key={index}>
                  {index < 2 ? cardNumber : "•".repeat(cardNumber.length)}
                </span>
              ))}
            </div>
            <span className="card-text card-user-name">{userName || "NAME"}</span>
          </div>
        </div>
      </div>
      {shouldShowTypeSelection && (
        <CardSelectModal
          isOpened={isModalOpened}
          closeModal={closeModal}
          onChangeCardType={onChangeCardType}
        />
      )}
    </>
  );
}
