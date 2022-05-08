import React from 'react';
import styled from '@emotion/styled';
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

function CardRegister() {
  const methods = useForm({ shouldValidateOnChange: true, shouldShowNativeHint: true, shouldUseAutoFocus: true });
  const { handleSubmit } = methods;
  const onSubmit = (event: React.FormEvent<HTMLFormElement>, result: UseFormSubmitResult) => {
    console.log(result);
  };
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
