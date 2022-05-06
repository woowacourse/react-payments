import React, { useRef } from 'react';
import { css } from '@emotion/react';
import CardNumberFieldset from './components/card-form/card-number/CardNumberFieldset';
import AppProvider from './components/Provider';
import CardOwnerNameFieldset from './components/card-form/card-owner/CardOwnerNameFieldset';
import ExpiredPeriodFieldset from './components/card-form/card-expired-period/ExpiredPeriodFieldset';
import CVCFieldset from './components/card-form/card-cvc/CVCFieldset';
import CardPasswordFieldset from './components/card-form/card-password/CardPasswordFieldset';
import Navigation from './components/navigation/Navigation';
import ConfirmButtonContainer from './components/card-form/confirm-button/ConfirmButtonContainer';
import CardContainer from './components/card/CardContainer';

function App() {
  return (
    <form id="card-form" css={style}>
      <Navigation />
      <AppProvider>
        <div css={cardWrapper}>
          <CardContainer />
        </div>
        <CardNumberFieldset />
        <ExpiredPeriodFieldset />
        <CardOwnerNameFieldset />
        <CVCFieldset />
        <CardPasswordFieldset />
        <ConfirmButtonContainer>다음</ConfirmButtonContainer>
      </AppProvider>
    </form>
  );
}

const style = css({
  width: '375px',
  margin: '0 auto',
  padding: '22px 28px 16px 28px',
  position: 'relative',
});

const cardWrapper = css({
  display: 'flex',
  justifyContent: 'center',
});

export default App;
