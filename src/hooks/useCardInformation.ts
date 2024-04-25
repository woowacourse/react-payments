import { CardInformation } from "../types/cardInformation";
import { CardIssuer } from "../constants/cardIssuers";
import { useState } from "react";

const useCardInformation = () => {
  const [cardInformation, setCardInformation] = useState<CardInformation>({
    cardNumbers: ["", "", "", ""],
    cardIssuer: "",
    cardExpiration: {
      month: "",
      year: "",
    },
    cardOwnerName: "",
    cardCVC: "",
    cardPassword: "",
  });

  const setCardNumbers = (inputValue: string, targetIndex: number) => {
    setCardInformation((prev) => {
      const cardNumbers: CardInformation["cardNumbers"] = [...prev.cardNumbers];
      cardNumbers[targetIndex] = inputValue;
      return { ...prev, cardNumbers };
    });
  };

  const setCardIssuer = (inputValue: CardIssuer) => {
    setCardInformation((prev) => ({ ...prev, cardIssuer: inputValue }));
  };

  const setCardExpiration = (inputValue: string, targetKey: string) => {
    setCardInformation((prev) => ({
      ...prev,
      cardExpiration: {
        ...prev.cardExpiration,
        [targetKey]: inputValue,
      },
    }));
  };

  const setCardOwnerName = (inputValue: string) => {
    setCardInformation((prev) => ({ ...prev, cardOwnerName: inputValue }));
  };

  const setCardCVC = (inputValue: string) => {
    setCardInformation((prev) => ({ ...prev, cardCVC: inputValue }));
  };

  const setCardPassword = (inputValue: string) => {
    setCardInformation((prev) => ({ ...prev, cardPassword: inputValue }));
  };

  return {
    cardInformation,
    setCardNumbers,
    setCardIssuer,
    setCardExpiration,
    setCardOwnerName,
    setCardCVC,
    setCardPassword,
  };
};

export default useCardInformation;
