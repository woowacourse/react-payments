import React from "react";

import { CardInfo } from "../../types";

export default function Card({ cardInfo }: { cardInfo: CardInfo }) {
  const { cardNumbers, expiredDate, userName } = cardInfo;

  return (
    <div className="card-box">
      <div className="empty-card">
        <div className="card-top">
          <span className="card-text"></span>
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
