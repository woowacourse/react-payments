import React from 'react';
import './card.css';
import '../../index.css';

export default function Card({
  cardCompanyName,
  cardColor,
  cardNumber,
  userName,
  expirationDate,
  size,
}) {
  return (
    <div className={`card-${size || 'normal'}`} style={cardColor && { backgroundColor: cardColor }}>
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
        {Array.from({ length: 16 }).map((_, index) => {
          if (index < 8) {
            return (
              <div key={index} className="card__card-number">
                {cardNumber.charAt(index)}
              </div>
            );
          }

          return (
            <div
              key={index}
              className={[
                'card__card-number',
                'dot',
                cardNumber.charAt(index) ? '' : 'hidden',
              ].join(' ')}
            ></div>
          );
        })}
      </div>
      <div className="card__card-detail-container">
        <div className="card__user-name">{userName || 'NAME'}</div>
        <div className="card__expiration-date">{expirationDate || 'MM/YY'}</div>
      </div>
    </div>
  );
}
