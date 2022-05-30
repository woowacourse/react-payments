import React, { useReducer } from "react";
import validateArray from "../util/validate";
import { cardAction } from "./type/useCardAction";

export const CARD_ACTION = {
  SET_CARD_NUMBER: "card/SET_CARD_NUMBER",
  SET_EXPIRED_DATE: "card/SET_EXPIRED_DATE",
  SET_OWNER_NAME: "card/SET_OWNER_NAME",
  SET_SECURE_CODE: "card/SET_SECURE_CODE",
  SET_PASSWORD: "card/SET_PASSWORD",
  SET_CARD_NAME: "card/SET_CARD_NAME",
  SET_NICKNAME: "card/SET_NICKNAME",
  INITIALIZE: "card/INITIALIZE",
} as const;

const initState = {
  cardNumber: ["", "", "", ""],
  expiredDate: ["", ""],
  ownerName: "",
  secureCode: "",
  password: ["", ""],
  cardName: "",
  color: "#d2d2d2",
  nickname: "",
};

const cardReducer = (state: Card, action: cardAction) => {
  switch (action.type) {
    case CARD_ACTION.SET_CARD_NUMBER:
      return {
        ...state,
        cardNumber: [
          ...state.cardNumber.slice(0, action.payload.index),
          action.payload.value,
          ...state.cardNumber.slice(action.payload.index + 1),
        ],
      };
    case CARD_ACTION.SET_EXPIRED_DATE:
      return {
        ...state,
        expiredDate: [
          ...state.expiredDate.slice(0, action.payload.index),
          action.payload.value,
          ...state.expiredDate.slice(action.payload.index + 1),
        ],
      };
    case CARD_ACTION.SET_OWNER_NAME:
      return {
        ...state,
        ownerName: action.payload.value,
      };
    case CARD_ACTION.SET_SECURE_CODE:
      return {
        ...state,
        secureCode: action.payload.value,
      };
    case CARD_ACTION.SET_PASSWORD:
      return {
        ...state,
        password: [
          ...state.password.slice(0, action.payload.index),
          action.payload.value,
          ...state.password.slice(action.payload.index + 1),
        ],
      };
    case CARD_ACTION.SET_CARD_NAME:
      return {
        ...state,
        color: action.payload.color,
        cardName: action.payload.cardName,
      };
    case CARD_ACTION.SET_NICKNAME:
      return {
        ...state,
        nickname: action.payload.value,
      };
    case CARD_ACTION.INITIALIZE:
      return initState;
    default:
      return state;
  }
};

const useCard = () => {
  const [cardInfo, updateCard] = useReducer<React.Reducer<Card, cardAction>>(
    cardReducer,
    initState
  );

  const validateCardInfo = () => {
    validateArray.forEach((validateFunc) => {
      validateFunc(cardInfo);
    });
  };

  return { cardInfo, updateCard, validateCardInfo };
};

export default useCard;
