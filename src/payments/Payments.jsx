import React, { useState } from "react";
import CardAddForm from "./components/CardAddForm/CardAddForm";
import CardConfirm from "./components/CardConfirm/CardConfirm";

const CARD_ADD_FORM = "cardAddForm";
const CARD_CONFIRM = "cardConfirm";

const Payments = () => {
  const [currentPage] = useState(CARD_ADD_FORM);

  return (
    <>
      {currentPage === CARD_ADD_FORM && <CardAddForm />}
      {currentPage === CARD_CONFIRM && <CardConfirm />}
    </>
  );
};

export default Payments;
