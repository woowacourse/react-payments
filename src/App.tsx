import React from "react";

import Card from "./components/Card";
import CardInfoForm from "./components/CardInfoForm";
import Header from "./components/Header";
import useCardInfoInput from "./hooks/useCardInfoInput";
import useCardInfoValidation from "./hooks/useCardInfoValidation";
import { cardInfoValidator } from "./lib/validation";

function App() {
  const {
    cardInfo,
    onChangeCardType,
    resetCardInfo,
    onChangeCardNumber,
    onChangeExpirationDate,
    onChangeUserName,
    onBlurUserName,
    onChangeSecurityCode,
    onChangePassword,
  } = useCardInfoInput();

  const cardInfoValidation = useCardInfoValidation(cardInfo);

  return (
    <div className="App">
      <Header title="카드 추가" />
      <Card cardInfo={cardInfo} onChangeCardType={onChangeCardType} />
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
