import React from 'react';
import './style.css';
import '../../index.css';
import { CARD } from '../../constants';

export default function Card({
  cardCompanyName,
  cardColor,
  cardNumber,
  userName,
  expirationDate,
  size,
  style,
}) {
  return (
    <div
      className={`card-${size || 'normal'}`}
      style={{ ...style, backgroundColor: cardColor || '#d2d2d2' }}
    >
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
          Array.from({ length: CARD.SERIAL_NUMBER_LENGTH }).map((_, index) => {
            if (index < CARD.SERIAL_ID_CODE_LENGTH) {
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
