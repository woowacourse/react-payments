import Card from "components/Card";
import CardInfoForm from "components/CardInfoForm";
import Header from "components/Header";
import { CardInfoContext } from "contexts/CardInfoProvider";
import React, { useContext } from "react";

function Add() {
  const { cardInfo } = useContext(CardInfoContext);

  return (
    <>
      <Header title="카드 추가" />
      <Card cardInfo={cardInfo} shouldShowTypeSelection={true} />
      <CardInfoForm />
    </>
  );
}

export default Add;
