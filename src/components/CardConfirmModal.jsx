import React from 'react';
import Card from './Card';

export default function CardConfirmModal({ onConfirm, cardData }) {
  return (
    <div>
      <button onClick={onConfirm}>확인</button>
      <Card
        cardCompanyIndex={cardData.cardCompanyIndex}
        cardNumber={cardData.cardNumber}
        cardOwner={cardData.cardOwner}
        cardExpiration={cardData.cardExpiration}
        cardName={cardData.cardName}
        color={cardData.color}
      ></Card>
      {JSON.stringify(cardData)}
    </div>
  );
}
