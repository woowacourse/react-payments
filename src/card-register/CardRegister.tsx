import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { FormProvider } from './hooks/useForm/useFormContext';
import useForm from './hooks/useForm/useForm';
import CVCFieldset from './components/card-form/card-cvc/CVCFieldset';
import ExpiredPeriodFieldset from './components/card-form/card-expired-period/ExpiredPeriodFieldset';
import CardNumberFieldset from './components/card-form/card-number/CardNumberFieldset';
import CardOwnerNameFieldset from './components/card-form/card-owner/CardOwnerNameFieldset';
import CardPasswordFieldset from './components/card-form/card-password/CardPasswordFieldset';
import ConfirmButtonContainer from './components/card-form/confirm-button/ConfirmButtonContainer';
import CardContainer from './components/card/CardContainer';
import { UseFormSubmitResult } from './hooks/useForm/types';
import { CardRegisterProvider } from './context';
import { Card } from '../card-list/types';
import { usePaymentContext } from '../context';

function CardRegister() {
  const { cardList, addCard } = usePaymentContext();
  const prevCardCount = React.useRef<number>(cardList.length);
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

    const card: Card = {
      cardNumber,
      ownerName,
      cvc,
      expiredPeriod,
      password,
    };

    addCard(card);
  };

  useEffect(() => {
    if (prevCardCount.current < cardList.length) {
      prevCardCount.current = cardList.length;
      navigate('/');
    }
  }, [navigate, cardList]);

  return (
    <CardRegisterProvider>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
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
    </CardRegisterProvider>
  );
}

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default CardRegister;
