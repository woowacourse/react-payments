import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddCardForm from './AddCardForm';
import Card from './Card';

function AddCard() {
  const navigator = useNavigate();

  const goBack = () => {
    navigator(-1);
  };

  return (
    <>
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
    </>
  );
}

export default AddCard;
