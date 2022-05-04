import React from 'react';
import CardForm from 'components/card/CardForm';
import CardNumberFieldset from 'fields/CardNumberFieldset';
import CardOwnerNameFieldset from 'fields/CardOwnerNameFieldset';
import CardPasswordFieldset from 'fields/CardPasswordFieldset';
import CVCFieldset from 'fields/CVCFieldset';
import ExpiredPeriodFieldset from 'fields/ExpiredPeriodFieldset';
import ConfirmButtonContainer from './ConfirmButtonContainer';

function CardFormContainer() {
  const handleSubmitCard = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('카드 등록완료');
  };

  const handleChangeForm = (event: any) => {
    const { target } = event;
    console.log(target.form);
  };

  return (
    <>
      <CardForm onChange={handleChangeForm} onSubmit={handleSubmitCard}>
        <CardNumberFieldset />
        <ExpiredPeriodFieldset />
        <CardOwnerNameFieldset />
        <CVCFieldset />
        <CardPasswordFieldset />
        <ConfirmButtonContainer>다음</ConfirmButtonContainer>
      </CardForm>
    </>
  );
}

export default CardFormContainer;
