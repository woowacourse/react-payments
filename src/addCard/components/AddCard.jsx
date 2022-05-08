import React, { useMemo, useState } from 'react';
import AddCardForm from './AddCardForm';
import Card from './Card';
import { getCard } from '../../util';
import AddCardContext from '../../AddCardContext';

function AddCard() {
  const [card, setCard] = useState(getCard());

  const updateCard = (name, value) => {
    setCard((prevCard) => {
      return { ...prevCard, [name]: value };
    });
  };

  const contextValue = useMemo(() => ({ card, updateCard }), [card]);

  const alertAddedCard = () => {
    alert(`카드를 추가하였습니다. ${card.ownerName}의 카드`);
  };

  return (
    <AddCardContext.Provider value={contextValue}>
      <div className="header-wrapper">
        <div className="back-button" />
        <h2 className="page-title">카드 추가</h2>
      </div>
      <Card />
      <AddCardForm addCard={alertAddedCard} />
    </AddCardContext.Provider>
  );
}

export default AddCard;
