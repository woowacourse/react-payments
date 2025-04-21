import { CardInformationType } from "../types/CardInformationType";
import { useState } from "react";

const initialCardInformation: CardInformationType = {
  uniqueNumber: ["", "", "", ""],
  expirationDate: ["", ""],
  cvcNumber: [""],
};

const useCardInformation = () => {
  const [cardInformationState, setCardInformationState] = useState(initialCardInformation);
  return { cardInformationState, setCardInformationState };
};

export default useCardInformation;
