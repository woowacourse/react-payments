import React from "react";

import Card from "./components/Card";
import CardInfoForm from "./components/CardInfoForm";
import Header from "./components/Header";
import { useCardInfo } from "./hooks/useCardInfo";

function App() {
  const {
    cardInfo,
    resetCardInfo,
    onChangeCardNumber,
    onChangeExpiredDate,
    onChangeUserName,
    onBlurUserName,
    onChangeSecurityCode,
    onChangePassword,
  } = useCardInfo();

  return (
    <div className="App">
      <Header />
      <Card cardInfo={cardInfo} />
      <CardInfoForm
        cardInfo={cardInfo}
        onChangeCardNumber={onChangeCardNumber}
        onChangeExpiredDate={onChangeExpiredDate}
        onChangeUserName={onChangeUserName}
        onBlurUserName={onBlurUserName}
        onChangeSecurityCode={onChangeSecurityCode}
        onChangePassword={onChangePassword}
        resetCardInfo={resetCardInfo}
      />
    </div>
  );
}

export default App;
