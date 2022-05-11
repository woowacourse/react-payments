import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddCardForm from './AddCardForm';
import Card from './Card';
import { getCard } from '../../util';
import AddCardContext from '../../AddCardContext';

function AddCard() {
  const [card, setCard] = useState(getCard());

  const navigator = useNavigate();

  const updateCard = (name, value) => {
    setCard((prevCard) => {
      return { ...prevCard, [name]: value };
    });
  };

  const goBack = () => {
    navigator(-1);
  };

  const contextValue = useMemo(() => ({ card, updateCard }), [card]);

  return (
    <AddCardContext.Provider value={contextValue}>
      <div className="header-wrapper">
        <div
          className="back-button"
          onClick={goBack}
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
          aria-label="back button"
        />
        <h2 className="page-title">카드 추가</h2>
      </div>
      <Card />
      <AddCardForm />
    </AddCardContext.Provider>
  );
}

export default AddCard;
