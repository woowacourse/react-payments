import { useState } from "react";

export type CardInfo = {
  firstNumber: string;
  secondNumber: string;
  thirdNumber: string;
  fourthNumber: string;
  month: string;
  year: string;
  cvc: string;
};

function useCardInfo() {
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
    month: "",
    year: "",
    cvc: "",
  });

  function handleCardInfo(key: keyof typeof cardInfo, value: string) {
    setCardInfo((prev) => ({ ...prev, [key]: value }));
  }

  return { cardInfo, handleCardInfo };
}

export default useCardInfo;
