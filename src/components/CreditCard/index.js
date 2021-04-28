import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '..';
import './style.css';

export const CreditCard = (props) => {
  const { company, cardNumber, ownerName, expirationDate } = props;
  return (
    <div className="CreditCard">
      <span className="CreditCard__CardCompany"> {company}</span>
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
  company: PropTypes.string,
  cardNumber: PropTypes.string,
  ownerName: PropTypes.string,
  expirationDate: PropTypes.string,
};

CreditCard.defaultProps = {
  company: '',
  cardNumber: '0000 0000 ···· ····',
  ownerName: '',
  expirationDate: '',
};
