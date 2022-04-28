import React from 'react';
import { useCardInput } from '../../hooks/useCardInput';
import Card from '../Card';
import InputForm from '../InputForm';

function AddCard() {
  const [cardInput, cardInputDispatch] = useCardInput();

  return (
    <div className="app">
      <h2 className="page-title"> 카드 추가 </h2>
      <Card cardInformation={cardInput}></Card>
      <InputForm cardInput={cardInput} cardInputDispatch={cardInputDispatch}></InputForm>
    </div>
  );
}

export default AddCard;
