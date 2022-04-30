import React from 'react';
import { useCardInput } from '../../hooks/useCardInput';
import Card from '../Card';
import InputForm from '../InputForm';

function AddCard() {
  const [cardInput, cardInputDispatch] = useCardInput();

  return (
    <div className="app">
      <h1 className="page-title"> 카드 추가 </h1>
      <Card cardInformation={cardInput} />
      <InputForm cardInput={cardInput} cardInputDispatch={cardInputDispatch} />
    </div>
  );
}

export default AddCard;
