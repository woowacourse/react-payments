import React from 'react';
import PropTypes from 'prop-types';
import { objectToString } from '../../utils/util';
import { CARD_NUMBER_TYPE, EXPIRATION_DATE_TYPE, PASSWORD_TYPE } from '../types';

function Card({ cardInformation: { cardNumber, expirationDate, ownerName } }) {
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
            <span className="card-text">{objectToString(cardNumber, ' ', 2)}</span>
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
  cardInformation: PropTypes.shape({
    cardNumber: CARD_NUMBER_TYPE,
    expirationDate: EXPIRATION_DATE_TYPE,
    ownerName: PropTypes.string,
    securityCode: PropTypes.string,
    password: PASSWORD_TYPE,
  }),
};

export default Card;
