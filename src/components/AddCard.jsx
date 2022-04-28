import React, { useState } from 'react';
import AddCardForm from './AddCardForm';
import Card from './Card';

function AddCard() {
  const [card, setCard] = useState({
    firstCardNumber: '',
    secondCardNumber: '',
    thirdCardNumber: '',
    fourthCardNumber: '',
    expireMonth: '',
    expireYear: '',
    ownerName: '',
    securityCode: '',
    password: '',
  });

  const updateCard = (cardForm) => {
    setCard({
      firstCardNumber: cardForm.firstCardNumber,
      secondCardNumber: cardForm.secondCardNumber,
      thirdCardNumber: cardForm.thirdCardNumber,
      fourthCardNumber: cardForm.fourthCardNumber,
      expireMonth: cardForm.expireMonth,
      expireYear: cardForm.expireYear,
      ownerName: cardForm.ownerName,
      securityCode: cardForm.securityCode,
      password: cardForm.firstCardNumber + cardForm.secondCardNumber,
    });
  };

  const addCard = (submittedCard) => {
    alert(`카드를 추가하였습니다. ${submittedCard.ownerName}의 카드`);
  };

  return (
    <>
      <div className="header-wrapper">
        <div className="back-button" />
        <h2 className="page-title">카드 추가</h2>
      </div>
      <Card card={card} />
      <AddCardForm updateCard={updateCard} addCard={addCard} />
    </>
  );
}

export default AddCard;
