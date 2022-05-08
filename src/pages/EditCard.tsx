import React, { useContext, useState } from "react";

import Card from "../common/Card";
import CardInfoForm from "../components/CardInfoForm";
import Header from "../common/Header";
import { Context } from "../contexts/store";
import useModal from "../hooks/useCardModal";
import SelectCard from "../components/SelectCard";

export default function EditCard() {
  const [state, dispatch] = useContext(Context);
  const { isModalShow, showModal, hideModal } = useModal();

  return (
    <>
      <Header pageTitle="카드 수정" />
      <Card cardInfo={state} isClick={true} onClick={showModal} size="small" />
      <CardInfoForm showModal={showModal} mode="edit" />
      {isModalShow && <SelectCard onClose={hideModal} />}
    </>
  );
}
