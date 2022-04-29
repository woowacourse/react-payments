import React from "react";

import { CardInfo } from "../../types";

export default function Card({ cardInfo }: { cardInfo: CardInfo }) {
  const { cardNumbers, expirationDate, userName } = cardInfo;

  return (
    <div className="card-box">
      <div className="empty-card">
        <div className="card-top">
          <span className="card-text"></span>
          <span className="card-text">
            <span className="card-expiration-date">{expirationDate.month || "MM"}</span> /{" "}
            <span className="card-expiration-date">{expirationDate.year || "YY"}</span>
          </span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>
        <div className="card-bottom">
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
  );
}
