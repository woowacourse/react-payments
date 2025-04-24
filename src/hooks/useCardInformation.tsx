import { CardInformationType } from "../types/CardInformationType";
import { useState } from "react";

const initialCardInformation: CardInformationType = {
  uniqueNumber: ["", "", "", ""],
  expirationDate: ["", ""],
  cvcNumber: [""],
  password: [""],
};

const useCardInformation = () => {
  const [cardInformationState, setCardInformationState] = useState<CardInformationType>(initialCardInformation);
  return { cardInformationState, setCardInformationState };
};

export default useCardInformation;
