import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { FormProvider } from '../hooks/useForm/useFormContext';
import useForm from '../hooks/useForm/useForm';
import CVCFieldset from '../components/card-form/card-cvc/CVCFieldset';
import ExpiredPeriodFieldset from '../components/card-form/card-expired-period/ExpiredPeriodFieldset';
import CardNumberFieldset from '../components/card-form/card-number/CardNumberFieldset';
import CardOwnerNameFieldset from '../components/card-form/card-owner/CardOwnerNameFieldset';
import CardPasswordFieldset from '../components/card-form/card-password/CardPasswordFieldset';
import ConfirmButtonContainer from '../components/card-form/confirm-button/ConfirmButtonContainer';
import CardContainer from '../components/card/CardContainer';
import { UseFormSubmitResult } from '../hooks/useForm/types';
import S from '../styled';
import { Card } from '../../shared/types';
import { useCardRegisterContext } from '../context';

function CardRegister() {
  const { updateCard } = useCardRegisterContext();
  const navigate = useNavigate();
  const methods = useForm({ shouldValidateOnChange: true, shouldShowNativeHint: true, shouldUseAutoFocus: true });
  const { handleSubmit } = methods;
  const onSubmit = (event: React.FormEvent<HTMLFormElement>, result: UseFormSubmitResult) => {
    const { values } = result;
    if (!values) return;

    const cardNumber = `${values['card-number-1']}${values['card-number-2']}${values['card-number-3']}${values['card-number-4']}`;
    const ownerName = values['card-owner-name'];
    const { cvc } = values;
    const expiredPeriod = `${values['expired-period-1']}${values['expired-period-2']}`;
    const password = `${values['password-1']}${values['password-2']}`;

    const newCard: Card = {
      cardNumber,
      ownerName,
      cvc,
      expiredPeriod,
      password,
    };

    updateCard(newCard);

    navigate('/card-register-confirm');
  };

  return (
    <S.CardRegister>
      <FormProvider {...methods}>
        <form id="card-register-form" onSubmit={handleSubmit(onSubmit)}>
          <CardWrapper>
            <CardContainer />
          </CardWrapper>
          <CardNumberFieldset />
          <ExpiredPeriodFieldset />
          <CardOwnerNameFieldset />
          <CVCFieldset />
          <CardPasswordFieldset />
          <ConfirmButtonContainer>다음</ConfirmButtonContainer>
        </form>
      </FormProvider>
    </S.CardRegister>
  );
}

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default CardRegister;
