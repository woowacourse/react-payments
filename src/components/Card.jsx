import React from 'react';
import PropTypes from 'prop-types';

function Card({ isEmptyCard, cardNumber, expireDate, ownerName }) {
  return (
    <div className="card-box">
      <div className={isEmptyCard ? 'empty-card' : 'small-card'}>
        <div className="card-top">
          <span className="card-text">안카드</span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip" />
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">{cardNumber}</span>
          </div>
        </div>
        <div className="card-bottom__info">
          <span className="card-text">{ownerName}</span>
          <span className="card-text">{expireDate}</span>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  isEmptyCard: PropTypes.bool,
  cardNumber: PropTypes.string,
  expireDate: PropTypes.string,
  ownerName: PropTypes.string,
};

export default Card;
