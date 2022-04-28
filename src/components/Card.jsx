import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const isInitialCard = (card) => {
  return Object.values(card).some((value) => value !== '');
};

function Card({ card }) {
  const [isEmptyCard, setIsEmptyCard] = useState(true);

  useEffect(() => {
    if (isInitialCard(card)) {
      setIsEmptyCard(false);
      return;
    }
    setIsEmptyCard(true);
  }, [card]);

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
            <span className="card-text">{`${card.firstCardNumber} ${card.secondCardNumber}`}</span>
            <input
              className="card-text-dot"
              type="password"
              value={card.thirdCardNumber}
              disabled
            />
            <input
              className="card-text-dot"
              type="password"
              value={card.fourthCardNumber}
              disabled
            />
          </div>
        </div>
        <div className="card-bottom__info">
          <span className="card-text">{card.ownerName || 'NAME'}</span>
          <span className="card-text">{`${card.expireMonth || 'MM'}/${
            card.expireYear || 'YY'
          }`}</span>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    firstCardNumber: PropTypes.string,
    secondCardNumber: PropTypes.string,
    thirdCardNumber: PropTypes.string,
    fourthCardNumber: PropTypes.string,
    expireMonth: PropTypes.string,
    expireYear: PropTypes.string,
    ownerName: PropTypes.string,
    securityCode: PropTypes.string,
    password: PropTypes.string,
  }),
};

export default Card;
