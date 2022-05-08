import React, { useContext, useState } from "react";

import Card from "../common/Card";
import CardInfoForm from "../components/CardInfoForm";
import Header from "../common/Header";
import { Context } from "../contexts/CardContext";
import useModal from "../hooks/useCardModal";
import SelectCard from "../components/SelectCard";

export default function AddCard() {
  const [cardTypeValidation, setCardTypeValidation] = useState(false);
  const [cardInfo, dispatch] = useContext(Context);
  const { isModalShow, showModal, hideModal } = useModal();

  const changeCardType = () => {
    setCardTypeValidation(true);
  };

  return (
    <>
      <Header pageTitle="카드 추가" />
      <Card cardInfo={cardInfo} isClick={true} onClick={showModal} size="small" />
      <CardInfoForm cardTypeValidation={cardTypeValidation} showModal={showModal} mode="add" />
      {isModalShow && <SelectCard onClose={hideModal} changeCardType={changeCardType} />}
    </>
  );
}
