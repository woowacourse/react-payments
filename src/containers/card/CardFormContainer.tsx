import React from 'react';
import CardNumberFieldset from 'fields/CardNumberFieldset';
import CardOwnerNameFieldset from 'fields/CardOwnerNameFieldset';
import CardPasswordFieldset from 'fields/CardPasswordFieldset';
import CVCFieldset from 'fields/CVCFieldset';
import ExpiredPeriodFieldset from 'fields/ExpiredPeriodFieldset';
import NextButtonContainer from '../button/NextButtonContainer';

function CardFormContainer() {
  return (
    <form>
      <CardNumberFieldset />
      <ExpiredPeriodFieldset />
      <CardOwnerNameFieldset />
      <CVCFieldset />
      <CardPasswordFieldset />
      <NextButtonContainer />
    </form>
  );
}

export default CardFormContainer;
