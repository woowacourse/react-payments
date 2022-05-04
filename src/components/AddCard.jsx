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
    firstPassword: '',
    secondPassword: '',
  });

  const updateCard = (name, value) => {
    setCard((prevCard) => {
      return { ...prevCard, [name]: value };
    });
  };

  const alertAddedCard = () => {
    alert(`카드를 추가하였습니다. ${card.ownerName}의 카드`);
  };

  return (
    <>
      <div className="header-wrapper">
        <div className="back-button" />
        <h2 className="page-title">카드 추가</h2>
      </div>
      <Card card={card} />
      <AddCardForm card={card} updateCard={updateCard} addCard={alertAddedCard} />
    </>
  );
}

export default AddCard;
