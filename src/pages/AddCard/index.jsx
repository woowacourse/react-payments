import React from 'react';
import { useCardInput } from '../../hooks/useCardInput';
import Card from '../../components/card/Card';
import CardInputForm from '../../components/input/InputForm/CardInputForm';

function AddCard() {
  const [cardInput, cardInputDispatch] = useCardInput();

  return (
    <div className="app">
      <h1 className="page-title"> 카드 추가 </h1>
      <Card cardInformation={cardInput} />
      <CardInputForm cardInput={cardInput} cardInputDispatch={cardInputDispatch} />
    </div>
  );
}

export default AddCard;
