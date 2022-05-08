import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import CardNumberFieldset from './components/card-form/card-number/CardNumberFieldset';
import CardOwnerNameFieldset from './components/card-form/card-owner/CardOwnerNameFieldset';
import ExpiredPeriodFieldset from './components/card-form/card-expired-period/ExpiredPeriodFieldset';
import CVCFieldset from './components/card-form/card-cvc/CVCFieldset';
import CardPasswordFieldset from './components/card-form/card-password/CardPasswordFieldset';
import Navigation from './components/navigation/Navigation';
import ConfirmButtonContainer from './components/card-form/confirm-button/ConfirmButtonContainer';
import CardContainer from './components/card/CardContainer';
import useForm from './hooks/useForm/useForm';
import { FormProvider } from './hooks/useForm/useFormContext';
import AppProvider from './components/Provider';
import { UseFormSubmitResult } from './hooks/useForm/types';

function App() {
  const methods = useForm({ shouldValidateOnChange: true, shouldShowNativeHint: true, shouldUseAutoFocus: true });
  const { handleSubmit } = methods;
  const onSubmit = (event: React.FormEvent<HTMLFormElement>, result: UseFormSubmitResult) => {
    console.log(result);
  };
  return (
    <Page>
      <AppProvider>
        <Navigation />
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div css={cardWrapper}>
              <CardContainer />
            </div>
            <CardNumberFieldset />
            <ExpiredPeriodFieldset />
            <CardOwnerNameFieldset />
            <CVCFieldset />
            <CardPasswordFieldset />
            <ConfirmButtonContainer>다음</ConfirmButtonContainer>
          </form>
        </FormProvider>
      </AppProvider>
    </Page>
  );
}

const Page = styled.div`
  width: 375px;
  margin: 0 auto;
  padding: 22px 28px 16px 28px;
  position: relative;
  background-color: white;
`;

const cardWrapper = css({
  display: 'flex',
  justifyContent: 'center',
});

export default App;
