import Card from "components/Card";
import CardInfoForm from "components/CardInfoForm";
import Header from "components/Header";
import useCardInfoInput from "hooks/useCardInfoInput";
import React, { useState } from "react";
import { CardInfo } from "types/cardInfo";

function Add() {
  const [cards, setCards] = useState<CardInfo[]>([]);
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
  } = useCardInfoInput();

  const addCard = () => {
    setCards(prevCards => [...prevCards, cardInfo]);
  };

  return (
    <>
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
        addCard={addCard}
      />
    </>
  );
}

export default Add;
