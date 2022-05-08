import Card from "components/add/Card";
import CardInfoForm from "components/add/CardInfoForm";
import Header from "components/common";
import useCardInfoInput from "hooks/useCardInfoInput";
import React from "react";

function Add() {
  const {
    cardInfo,
    cardInfoValidation,
    onChangeCardType,
    resetCardInfo,
    onChangeCardNumber,
    onChangeExpirationDate,
    onChangeUserName,
    onBlurUserName,
    onChangeSecurityCode,
    onChangePassword,
    onChangeCardName,
    pullCardInfo,
  } = useCardInfoInput();

  return (
    <>
      <Header title="카드 추가" />
      <Card cardInfo={cardInfo} shouldShowTypeSelection={true} />
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
    </>
  );
}

export default Add;
