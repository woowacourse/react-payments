import Card from "components/add/Card";
import CardInfoForm from "components/add/CardInfoForm";
import Header from "components/common";
import { CardInfoContext } from "contexts/CardInfoProvider";
import React, { useContext } from "react";

function Add() {
  const { cardInfo } = useContext(CardInfoContext);

  return (
    <>
      <Header title="카드 추가" />
      <Card cardInfo={cardInfo} shouldShowTypeSelection={true} pointer={true} />
      <CardInfoForm />
    </>
  );
}

export default Add;
