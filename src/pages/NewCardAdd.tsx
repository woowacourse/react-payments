import React, { useContext, useState } from "react";

import Card from "../components/Card";
import CardInfoForm from "../components/CardInfoForm";
import Header from "../components/Header";
import { Context } from "../contexts/store";
import useModal from "../hooks/useCardModal";
import Modal from "../components/Modal";

export default function NewCardAdd() {
  const [cardTypeValidation, setCardTypeValidation] = useState(false);
  const [state, dispatch] = useContext(Context);
  const { isModalShow, showModal, hideModal } = useModal();

  const changeCardType = cardType => {
    dispatch({ type: "CHANGE_CARD_TYPE", payload: { cardType } });
    setCardTypeValidation(true);
  };

  return (
    <>
      <Header />
      <Card showModal={showModal} />
      <CardInfoForm cardTypeValidation={cardTypeValidation} showModal={showModal} />
      {isModalShow && <Modal onClose={hideModal} changeCardType={changeCardType} />}
    </>
  );
}
