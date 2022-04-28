import { useReducer, useState } from "react";

const reducer = (state, action) => {
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
  };
  const [form, dispatch] = useReducer(reducer, initState);
  //   const [form, setForm] = useState({
  //     cardNumber: ["", "", "", ""],
  //     expiredDate: ["", ""],
  //     ownerName: "",
  //     secureCode: "",
  //     password: ["", ""],
  //   });

  //   const { cardNumber, expiredDate, password } = form;

  //   const update = (name, payload, index) => {
  //     if (Array.isArray(form[name])) {
  //       payload = [
  //         ...form[name].slice(0, index),
  //         payload,
  //         ...form[name].slice(index + 1),
  //       ];
  //     }
  //     setForm({
  //       ...form,
  //       [name]: payload,
  //     });
  //   };

  //   const updateCardNumber = (number, index) => {
  //     update("cardnumber", number);
  //     /*setForm({
  //       ...form,
  //       cardNumber: [
  //         ...cardNumber.slice(0, index),
  //         number,
  //         ...cardNumber.slice(index + 1),
  //       ],
  //     });*/
  //   };

  //   const updateExpiredDate = (number, index) => {
  //     setForm({
  //       ...form,
  //       expiredDate: [
  //         ...expiredDate.slice(0, index),
  //         number,
  //         ...expiredDate.slice(index + 1),
  //       ],
  //     });
  //   };

  //   const updateOwnerName = (name) => {
  //     setForm({
  //       ...form,
  //       ownerName: name,
  //     });
  //   };

  //   const updateSecureCode = (number) => {
  //     setForm({
  //       ...form,
  //       secureCode: number,
  //     });
  //   };

  //   const updatePassword = (number, index) => {
  //     setForm({
  //       ...form,
  //       password: [
  //         ...password.slice(0, index),
  //         number,
  //         ...password.slice(index + 1),
  //       ],
  //     });
  //   };
  return [form, dispatch];
  //   return [
  //     form,
  //     updateCardNumber,
  //     updateExpiredDate,
  //     updateOwnerName,
  //     updateSecureCode,
  //     updatePassword,
  //   ];
};

export default useCard;
