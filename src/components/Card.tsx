import React from 'react';

import { CardNumber } from '../type';
import { changeNumberToMask } from '../utils/processData';
import './Card.css';

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
      <div>
        <div className="ic-chip" />
      </div>
      <div className="card-track-3">
        <span>{cardNumber.first === '' ? '카드번호' : cardNumber.first}</span>
        <span>{cardNumber.second}</span>
        <span>{changeNumberToMask(cardNumber.third)}</span>
        <span>{changeNumberToMask(cardNumber.fourth)}</span>
      </div>
      <div className="card-track-4">
        <span className="card-owner-view">{cardOwner === '' ? 'NAME' : cardOwner}</span>
        <span>{expired === '' ? 'MM/YY' : expired}</span>
      </div>
    </div>
  );
};

export default Card;
