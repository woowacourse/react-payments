import React, { useState } from 'react';
import AddCardForm from './AddCardForm';
import Card from './Card';

function AddCard() {
  const [cardNumber, setCardNumber] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [password, setPassword] = useState('');
  const [isEmptyCard, setIsEmptyCard] = useState(true);

  return (
    <>
      <div className="header-wrapper">
        <div className="back-button" />
        <h2 className="page-title">카드 추가</h2>
      </div>
      <Card
        isEmptyCard={isEmptyCard}
        cardNumber={cardNumber}
        expireDate={expireDate}
        ownerName={ownerName}
      />
      <AddCardForm />
    </>
  );
}

export default AddCard;
