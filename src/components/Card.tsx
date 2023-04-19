import React from 'react';
import './Card.css';

type CardProps = {
  cardType: string;
  cardNumber: string;
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
        <span>{cardNumber}</span>
      </div>
      <div className="card-track-4">
        <span>{cardOwner}</span>
        <span>{expired}</span>
      </div>
    </div>
  );
};

export default Card;
