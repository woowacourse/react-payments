import { useReducer } from "react";

const updateCard = (state, action) => {
  switch (action.type) {
    case "cardNumber":
      return {
        ...state,
        cardNumber: [
          ...state.cardNumber.slice(0, action.payload.index),
          action.payload.value,
          ...state.cardNumber.slice(action.payload.index + 1),
        ],
      };
    case "expiredDate":
      return {
        ...state,
        expiredDate: [
          ...state.expiredDate.slice(0, action.payload.index),
          action.payload.value,
          ...state.expiredDate.slice(action.payload.index + 1),
        ],
      };
    case "ownerName":
      return {
        ...state,
        ownerName: action.payload.value,
      };
    case "secureCode":
      return {
        ...state,
        secureCode: action.payload.value,
      };
    case "password":
      return {
        ...state,
        password: [
          ...state.password.slice(0, action.payload.index),
          action.payload.value,
          ...state.password.slice(action.payload.index + 1),
        ],
      };
    case "pickColor":
      return {
        ...state,
        color: action.payload.color,
        cardName: action.payload.cardName,
      };
    default:
      return state;
  }
};

const useCard = () => {
  const initState = {
    cardNumber: ["", "", "", ""],
    expiredDate: ["", ""],
    ownerName: "",
    secureCode: "",
    password: ["", ""],
    cardName: "",
    color: "#d2d2d2",
  };

  return useReducer(updateCard, initState);
};

export default useCard;
