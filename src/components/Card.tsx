import React from 'react';
import { changeNumberToMask } from '../utils/util';
import './Card.css';

type CardNumber = {
  first: string;
  second: string;
  third: string;
  fourth: string;
};
type CardProps = {
  cardType: string;
  cardNumber: CardNumber;
  cardOwner: string;
  expired: string;
};

const Card = ({ cardType, cardNumber, cardOwner, expired }: CardProps) => {
  return (
    <div className="card">
      <div className="card-track-1">
        <span className="card-type">{cardType}</span>
      </div>
      <div className="card-track-2">
        <div className="ic-chip"></div>
      </div>
      <div className="card-track-3">
        <span>{cardNumber.first}</span>
        <span>{cardNumber.second}</span>
        <span>{changeNumberToMask(cardNumber.third)}</span>
        <span>{changeNumberToMask(cardNumber.fourth)}</span>
      </div>
      <div className="card-track-4">
        <span className="card-owner-view">{cardOwner}</span>
        <span>{expired}</span>
      </div>
    </div>
  );
};

export default Card;
