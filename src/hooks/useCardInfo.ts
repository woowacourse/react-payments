import { useState } from "react";
import { CARD_BRAND_COLOR } from "../components/InputField/CardBrand/constants";

export type CardInfo = {
  firstNumber: string;
  secondNumber: string;
  thirdNumber: string;
  fourthNumber: string;
  month: string;
  year: string;
  cvc: string;
  cardBrand: keyof typeof CARD_BRAND_COLOR | "";
  password: string;
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
    cardBrand: "",
    password: "",
  });

  function handleCardInfo(key: keyof typeof cardInfo, value: string) {
    setCardInfo((prev) => ({ ...prev, [key]: value }));
  }

  return { cardInfo, handleCardInfo };
}

export default useCardInfo;
