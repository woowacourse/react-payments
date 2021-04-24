import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '..';
import './style.css';

export const CreditCard = (props) => {
  const { cardCompany, cardNumber, ownerName, expirationDate } = props;
  return (
    <div className="CreditCard">
      <span className="CreditCard__CardCompany"> {cardCompany}</span>
      <Card backgroundColor="#cbba64" size="chip" />
      <span className="CreditCard__CardNumber"> {cardNumber}</span>
      <div className="CreditCard__Line">
        <span className="CreditCard__OwnerName"> {ownerName}</span>
        <span className="CreditCard__ExpirationDate"> {expirationDate}</span>
      </div>
    </div>
  );
};

CreditCard.propTypes = {
  cardCompany: PropTypes.string,
  cardNumber: PropTypes.string,
  ownerName: PropTypes.string,
  expirationDate: PropTypes.string,
};

CreditCard.defaultProps = {
  cardCompany: '',
  cardNumber: '0000 0000 ···· ····',
  ownerName: '',
  expirationDate: '',
};
