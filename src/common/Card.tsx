import React from "react";

import { CARD_TYPE } from "../constants";
import { CardInfo } from "../types";
interface CardProps {
  cardInfo: CardInfo;
  onClick?: () => void;
  size: string;
  isCardName?: boolean;
  isClick?: boolean;
}

export default function Card({
  cardInfo,
  isClick = false,
  onClick = () => {},
  size,
  isCardName = false,
}: CardProps) {
  const { cardName, cardType, expiredDate, cardNumbers, userName } = cardInfo;
  const cardSize = {
    small: {
      shape: "card-shape",
      text: "card-text",
      chip: "small-card__chip",
    },
    big: {
      shape: "big-card",
      text: "card-text__big",
      chip: "big-card__chip",
    },
  };

  console.log();

  return (
    <div className="card-box">
      <div
        className={`${cardSize[size].shape} ${CARD_TYPE[cardType].color} ${
          isClick ? "cursor-pointer" : ""
        }`}
        onClick={onClick}
        aria-hidden="true"
      >
        <div className="card-top">
          <span className={cardSize[size].text}>{CARD_TYPE[cardType].name}</span>
          <span className={cardSize[size].text}>
            <span className="card-expired-date">{expiredDate.month || "MM"}</span>
            <span className="card-expired-date-delimiter">/</span>
            <span className="card-expired-date">{expiredDate.year || "YY"}</span>
          </span>
        </div>
        <div className="card-middle">
          <div className={cardSize[size].chip} />
        </div>
        <div className="card-bottom">
          <div className={`${cardSize[size].text} card-numbers-text`}>
            {cardNumbers.map((cardNumber, index) => {
              return (
                <span className="card-number" key={index}>
                  {cardNumber}
                </span>
              );
            })}
          </div>
          <span className={`${cardSize[size].text} card-user-name`}>{userName || "NAME"}</span>
        </div>
      </div>
      {isCardName && <div className="card-name">{cardName}</div>}
    </div>
  );
}
