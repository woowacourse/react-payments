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

  return (
    <AddCardContext.Provider value={contextValue}>
      <div className="header-wrapper">
        <div className="back-button" />
        <h2 className="page-title">카드 추가</h2>
      </div>
      <Card />
      <AddCardForm />
    </AddCardContext.Provider>
  );
}

export default AddCard;
