import React from 'react';
import PropTypes from 'prop-types';
import { objectToString } from '../../utils/util';

function Card(props) {
  const { cardNumber, expirationDate, ownerName } = props;

  return (
    <div className="card-box">
      <div className="small-card">
        <div className="card-top">
          <span className="card-text">클린카드</span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">{objectToString(cardNumber, ' ')}</span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text">{ownerName}</span>
            <span className="card-text">{objectToString(expirationDate, '/')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  cardNumber: PropTypes.object,
  expirationDate: PropTypes.object,
  ownerName: PropTypes.string,
};

export default Card;
