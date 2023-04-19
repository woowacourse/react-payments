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
        <span>{cardType}</span>
      </div>
      <div className="card-track-2">
        <div className="ic-chip"></div>
      </div>
      <div className="card-track-3">
        <span>{`${cardNumber.first} ${cardNumber.second} ${changeNumberToMask(
          cardNumber.third
        )} ${changeNumberToMask(cardNumber.fourth)}`}</span>
      </div>
      <div className="card-track-4">
        <span>{cardOwner}</span>
        <span>{expired}</span>
      </div>
    </div>
  );
};

export default Card;
