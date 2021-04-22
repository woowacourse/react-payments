import React from 'react';
import './card.css';
import '../../index.css';

export default function Card({
  cardCompanyName,
  cardColor,
  cardNumber,
  userName = 'NAME',
  expirationDate = 'MM/YY',
  size = 'normal',
}) {
  return (
    <div className={`card-${size}`} style={cardColor && { backgroundColor: cardColor }}>
      <div className="card__company-name">{cardCompanyName}</div>
      <div className="card__chip">
        <svg viewBox="0 0 60 39">
          <path
            className="card__chip-line"
            d="M 0, 13 L 30, 13 M 0, 26 L 30, 26 M 30, 13 L 30, 26  M 30, 20 L 60, 20 M 30, 13 L 60, 0 M 30, 26 L 60, 39"
          />
        </svg>
      </div>
      <div className="card__card-number-container">
        {cardNumber &&
          Array.from(cardNumber.replaceAll('-', '')).map((char, index) => {
            if (index < 8) {
              return <div className="card__card-number">{char}</div>;
            }
            return <div className="card__card-number dot"></div>;
          })}
      </div>
      <div className="d-flex justify-space-between">
        <div className="card__user-name">{userName}</div>
        <div className="card__expiration-date">{expirationDate}</div>
      </div>
    </div>
  );
}
