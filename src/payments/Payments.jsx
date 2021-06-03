import React, { useReducer } from "react";
import { throwError, PAGE } from "../@shared/utils";
import paymentsReducer, { addNewCardInfo, editCardInfo, movePage } from "./PaymentReducer";
import CardAddForm from "./components/CardAddForm/CardAddForm";
import CardConfirm from "./components/CardConfirm/CardConfirm";
import CardList from "./components/CardList/CardList";

const initialState = {
  page: PAGE.CARD_LIST,
  cardInfos: [],
};

const Payments = () => {
  const [state, dispatch] = useReducer(paymentsReducer, initialState);

  const addCardInfo = cardInfo => {
    dispatch(addNewCardInfo(cardInfo));
    dispatch(movePage(PAGE.CARD_CONFIRM));
  };

  const editNewCardInfo = ({ id, cardInfo }) => {
    dispatch(editCardInfo({ id, cardInfo }));
    dispatch(movePage(PAGE.CARD_LIST));
  };

  const moveToCardListPage = () => {
    dispatch(movePage(PAGE.CARD_LIST));
  };

  const moveToCardAddForm = () => {
    dispatch(movePage(PAGE.CARD_ADD_FORM));
  };

  const { page, cardInfos } = state;

  switch (page) {
    case PAGE.CARD_ADD_FORM:
      return <CardAddForm addCardInfo={addCardInfo} onBackButtonClick={moveToCardListPage} />;
    case PAGE.CARD_CONFIRM:
      return <CardConfirm cardInfo={[...cardInfos].pop()} editCardInfo={editNewCardInfo} />;
    case PAGE.CARD_LIST:
      return <CardList cardInfos={cardInfos} onAddCardClick={moveToCardAddForm} />;
    default:
      return throwError(`Invalid Page: ${String(page)}`);
  }
};

export default Payments;
