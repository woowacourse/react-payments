import React, { useContext } from "react";

import { Context } from "../../contexts/store";

const CARD_TYPE = {
  empty: { color: "empty-card", name: "클릭하여 카드 선택" },
  poco: { color: "poco-card", name: "포코 카드" },
  jun: { color: "jun-card", name: "준 카드" },
  park: { color: "park-card", name: "공원 카드" },
  bran: { color: "bran-card", name: "브랜 카드" },
  loyd: { color: "loyd-card", name: "로이드 카드" },
  dobi: { color: "dobi-card", name: "도비 카드" },
  colin: { color: "colin-card", name: "콜린 카드" },
  sun: { color: "sun-card", name: "썬 카드" },
};

interface CardProps {
  showModal?: () => void;
  size: string;
}

export default function Card({ showModal, size }: CardProps) {
  const [state, dispatch] = useContext(Context);
  const { cardType, expiredDate, cardNumbers, userName } = state;
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

  return (
    <div className="card-box">
      <div
        className={`${cardSize[size].shape} ${CARD_TYPE[cardType].color}`}
        onClick={showModal}
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
    </div>
  );
}
