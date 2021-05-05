import React, { useState } from "react";
import { throwError, PAGE } from "../@shared/utils";
import CardAddForm from "./components/CardAddForm/CardAddForm";
import CardConfirm from "./components/CardConfirm/CardConfirm";
import CardList from "./components/CardList/CardList";

const Payments = () => {
  const [currentPage, setCurrentPage] = useState(PAGE.CARD_ADD_FORM);
  const [newCardInfo, setNewCardInfo] = useState(null);
  const [cardInfosList, setCardInfosList] = useState([]);

  const addCardInfo = cardInfo => {
    setNewCardInfo(cardInfo);
    setCurrentPage(PAGE.CARD_CONFIRM);
    setCardInfosList([...cardInfosList, cardInfo]);
  };

  const handleConfirmClick = () => setCurrentPage(PAGE.CARD_LIST);

  const getPage = {
    [PAGE.CARD_ADD_FORM]: () => <CardAddForm addCardInfo={addCardInfo} />,
    [PAGE.CARD_CONFIRM]: () => <CardConfirm cardInfo={newCardInfo} onConfirmClick={handleConfirmClick} />,
    [PAGE.CARD_LIST]: () => <CardList cardInfosList={cardInfosList} />,
  };

  return getPage?.[currentPage]() ?? throwError(`Invalid Page: ${String(currentPage)}`);
};

export default Payments;
