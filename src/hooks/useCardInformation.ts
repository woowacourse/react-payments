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
    cardCvc: "",
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

  const setCardCvc = (inputValue: string) => {
    setCardInformation((prev) => ({ ...prev, cardCvc: inputValue }));
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
    setCardCvc,
    setCardPassword,
  };
};

export default useCardInformation;
