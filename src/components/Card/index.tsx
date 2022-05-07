import React, { useState, useContext } from "react";

import { Context } from "../../contexts/store";
const cardType = {
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

export default function Card({ showModal }) {
  const [state, dispatch] = useContext(Context);
  const { cardNumbers, expiredDate, userName } = state;

  return (
    <div className="card-box">
      <div
        className={`card-shape ${cardType[state.cardType].color}`}
        onClick={showModal}
        aria-hidden="true"
      >
        <div className="card-top">
          <span className="card-text">{cardType[state.cardType].name}</span>
          <span className="card-text">
            <span className="card-expired-date">{expiredDate.month || "MM"}</span> /{" "}
            <span className="card-expired-date">{expiredDate.year || "YY"}</span>
          </span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>
        <div className="card-bottom">
          <div className="card-text card-numbers-text">
            {cardNumbers.map((cardNumber, index) => {
              return (
                <span className="card-number" key={index}>
                  {cardNumber}
                </span>
              );
            })}
          </div>
          <span className="card-text card-user-name">{userName || "NAME"}</span>
        </div>
      </div>
    </div>
  );
}
