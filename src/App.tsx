import React from "react";

import Card from "./components/Card";
import CardInfoForm from "./components/CardInfoForm";
import Header from "./components/Header";
import { useCardInfo } from "./hooks/useCardInfo";
import { useCardInfoValidation } from "./hooks/useCardInfoValidation";
import cardInfoValidator from "./lib/validation";

function App() {
  const {
    cardInfo,
    resetCardInfo,
    onChangeCardNumber,
    onChangeExpirationDate,
    onChangeUserName,
    onBlurUserName,
    onChangeSecurityCode,
    onChangePassword,
  } = useCardInfo();

  const cardInfoValidation = useCardInfoValidation(cardInfo, cardInfoValidator);

  return (
    <div className="App">
      <Header />
      <Card cardInfo={cardInfo} />
      <CardInfoForm
        cardInfo={cardInfo}
        onChangeCardNumber={onChangeCardNumber}
        onChangeExpirationDate={onChangeExpirationDate}
        onChangeUserName={onChangeUserName}
        onBlurUserName={onBlurUserName}
        onChangeSecurityCode={onChangeSecurityCode}
        onChangePassword={onChangePassword}
        resetCardInfo={resetCardInfo}
        cardInfoValidation={cardInfoValidation}
      />
    </div>
  );
}

export default App;
