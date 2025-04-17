import { CardInformationType, CardType } from "../types/CardInformationType";
import { useState, useEffect } from "react";

const CardInformation = () => {
  const initialCardInformation: CardInformationType = {
    uniqueNumber: ["", "", "", ""],
    expirationDate: ["", ""],
    cvcNumber: [""],
  };

  const [cardInformationState, setCardInformationState] = useState(initialCardInformation);
  const [cardType, setCardType] = useState<CardType>("none");

  useEffect(() => {
    const first = cardInformationState.uniqueNumber[0];
    const bin = first.slice(0, 2);

    if (first.startsWith("4")) {
      setCardType("visa");
    } else if (/^5[1-5]/.test(bin)) {
      setCardType("master");
    } else {
      setCardType("none");
    }
  }, [cardInformationState.uniqueNumber[0]]);

  return { cardType, cardInformationState, setCardInformationState };
};

export default CardInformation;
