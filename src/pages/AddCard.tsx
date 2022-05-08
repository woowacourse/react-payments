import React, { useContext, useState } from "react";

import Card from "../common/Card";
import CardInfoForm from "../components/CardInfoForm";
import Header from "../common/Header";
import { Context } from "../contexts/store";
import useModal from "../hooks/useCardModal";
import SelectCard from "../components/SelectCard";

export default function AddCard() {
  const [cardTypeValidation, setCardTypeValidation] = useState(false);
  const [state, dispatch] = useContext(Context);
  const { isModalShow, showModal, hideModal } = useModal();

  const changeCardType = cardType => {
    dispatch({ type: "CHANGE_CARD_TYPE", payload: { cardType } });
    setCardTypeValidation(true);
  };

  return (
    <>
      <Header pageTitle="카드 추가" />
      <Card cardInfo={state} isClick={true} onClick={showModal} size="small" />
      <CardInfoForm cardTypeValidation={cardTypeValidation} showModal={showModal} />
      {isModalShow && <SelectCard onClose={hideModal} changeCardType={changeCardType} />}
    </>
  );
}
