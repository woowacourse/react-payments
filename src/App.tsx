import React from "react";
import { css } from "@emotion/react";
import Card from "./components/atoms/Card";
import CardNumberFieldset from "./components/molecules/CardNumberFieldset";
import AppProvider from "./components/Provider";
import CardOwnerNameFieldset from "./components/molecules/CardOwnerNameFieldset";
import ExpiredPeriodFieldset from "./components/molecules/ExpiredPeriodFieldset";
import CVCFieldset from "./components/molecules/CVCFieldset";
import CardPasswordFieldset from "./components/molecules/CardPasswordFieldset";
import Navigation from "./components/molecules/Navigation";
import ConfirmButtonContainer from "./components/atoms/confirm-button/ConfirmButtonContainer";

const style = css({
  width: '375px',
  margin: '0 auto',
  padding: '22px 28px 16px 28px',
  position: 'relative',
});

const cardWrapper = css({
  display: 'flex',
  justifyContent: 'center',
})

function App() {
  return (
    <div id="card-form" css={style}> 
      <Navigation />
      <AppProvider>
        <div css={cardWrapper}>
          <Card />
        </div>
        <CardNumberFieldset />
        <ExpiredPeriodFieldset />
        <CardOwnerNameFieldset />
        <CVCFieldset />
        <CardPasswordFieldset />
        <ConfirmButtonContainer>다음</ConfirmButtonContainer>
      </AppProvider>
    </div>
  );
}

export default App;
