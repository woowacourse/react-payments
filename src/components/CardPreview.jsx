/* eslint-disable react/prop-types */
import React from 'react';

const CardPreview = ({ cardNumber, expiredDate, owner }) => {
  return (
    <div className="card-box">
      <div className="small-card">
        <div className="card-top">
          <span className="card-text">클린카드</span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip" />
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">
              {cardNumber.first} - {cardNumber.second} - {cardNumber.third} -{' '}
              {cardNumber.fourth}
            </span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text">{owner}</span>
            <span className="card-text">
              {expiredDate.month} / {expiredDate.year}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
