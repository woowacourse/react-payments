import React from 'react';
import CardForm from 'components/card/CardForm';
import CardNumberFieldset from 'fields/CardNumberFieldset';
import CardOwnerNameFieldset from 'fields/CardOwnerNameFieldset';
import CardPasswordFieldset from 'fields/CardPasswordFieldset';
import CVCFieldset from 'fields/CVCFieldset';
import ExpiredPeriodFieldset from 'fields/ExpiredPeriodFieldset';
import NextButtonContainer from './NextButtonContainer';

function CardFormContainer() {
  const handleChangeForm = (event: any) => {
    const { target } = event;
  };

  return (
    <>
      <CardForm onChange={handleChangeForm}>
        <CardNumberFieldset />
        <ExpiredPeriodFieldset />
        <CardOwnerNameFieldset />
        <CVCFieldset />
        <CardPasswordFieldset />
        <NextButtonContainer />
      </CardForm>
    </>
  );
}

export default CardFormContainer;
