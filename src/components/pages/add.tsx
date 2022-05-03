import Card from "components/Card";
import CardInfoForm from "components/CardInfoForm";
import Header from "components/Header";
import { CardInfoProvider } from "contexts/CardInfoProvider";
import React from "react";

function Add() {
  return (
    <CardInfoProvider>
      <Header title="카드 추가" />
      <Card cardInfo={cardInfo} shouldShowTypeSelection={true} pointer={true} />
      <CardInfoForm />
    </CardInfoProvider>
  );
}

export default Add;
