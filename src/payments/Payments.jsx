import React, { useState } from "react";
import CardAddForm from "./components/CardAddForm/CardAddForm";
import CardConfirm from "./components/CardConfirm/CardConfirm";

const CARD_ADD_FORM = "cardAddForm";
const CARD_CONFIRM = "cardConfirm";

const Payments = () => {
  const [currentPage, setCurrentPage] = useState(CARD_ADD_FORM);
  const [newCardInfo, setNewCardInfo] = useState(null);

  const addCardInfo = newCardInfo => {
    setNewCardInfo(newCardInfo);
    setCurrentPage(CARD_CONFIRM);
  };

  return (
    <>
      {currentPage === CARD_ADD_FORM && <CardAddForm addCardInfo={addCardInfo} />}
      {currentPage === CARD_CONFIRM && <CardConfirm cardInfo={newCardInfo} />}
    </>
  );
};

export default Payments;
