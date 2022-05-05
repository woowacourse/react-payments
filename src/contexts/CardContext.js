import React from "react";

export const cards = [
  {
    cardNickname: "법카",
    cardType: {
      name: "세지",
      color: "#AB46D2",
    },
    cardNumber: {
      firstNumber: "1234",
      secondNumber: "5678",
    },
    expireDate: {
      month: "12",
      year: "22",
    },
    ownerName: "RYU SEGI",
  },
];

export const CardContext = React.createContext(cards);
