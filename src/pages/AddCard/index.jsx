import React from 'react';
import { useCardInput } from '../../hooks/useCardInput';
import Card from '../../components/card/Card';
import CardInputForm from '../../components/form/InputForm/CardInputForm';
import Page from '..';

function AddCard() {
  const [cardInput, cardInputDispatch] = useCardInput();

  return (
    <Page>
      <Card cardInformation={cardInput} />
      <CardInputForm cardInput={cardInput} cardInputDispatch={cardInputDispatch} />
    </Page>
  );
}

export default AddCard;
