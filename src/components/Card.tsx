import React from 'react';

type CardProps = {
  cardType: string;
  cardNumber: string;
  cardOwner: string;
  expireDate: string;
};

const Card = ({ cardType, cardNumber, cardOwner, expireDate }: CardProps) => {
  return (
    <div>
      <div>{cardType}</div>
      <div>{/* IC 칩 이미지 */}</div>
      <div>{cardNumber}</div>
      <div>
        <span>{cardOwner}</span>
        <span>{expireDate}</span>
      </div>
    </div>
  );
};

export default Card;
