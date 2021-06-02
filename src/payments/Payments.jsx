import React, { useState } from "react";
import { throwError, PAGE } from "../@shared/utils";
import CardAddForm from "./pages/CardAddForm/CardAddForm";
import CardConfirm from "./pages/CardConfirm/CardConfirm";
import CardList from "./pages/CardList/CardList";

let index = -1;

const Payments = () => {
  const [currentPage, setCurrentPage] = useState(PAGE.CARD_LIST);
  const [newCardInfo, setNewCardInfo] = useState(null);
  const [cardInfosList, setCardInfosList] = useState([]);

  const addCardInfo = cardInfo => {
    index += 1;

    setNewCardInfo({ ...cardInfo, id: index });
    setCurrentPage(PAGE.CARD_CONFIRM);
    setCardInfosList([...cardInfosList, cardInfo]);
  };

  const handleBackButtonClick = () => setCurrentPage(PAGE.CARD_LIST);

  const handleConfirmClick = () => setCurrentPage(PAGE.CARD_LIST);

  const handleAddCardClick = () => setCurrentPage(PAGE.CARD_ADD_FORM);

  switch (currentPage) {
    case PAGE.CARD_ADD_FORM:
      return <CardAddForm addCardInfo={addCardInfo} onBackButtonClick={handleBackButtonClick} />;
    case PAGE.CARD_CONFIRM:
      return <CardConfirm cardInfo={newCardInfo} onConfirmClick={handleConfirmClick} />;
    case PAGE.CARD_LIST:
      return <CardList cardInfosList={cardInfosList} onAddCardClick={handleAddCardClick} />;
    default:
      return throwError(`Invalid Page: ${String(currentPage)}`);
  }
};

export default Payments;
