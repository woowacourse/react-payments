import { useState } from "react";
import type { CardNumbers } from "../components/InputField/CardNumberField";
import { getCardBrand } from "../utils/getCardBrand";
import { getCardNumberErrorMessage } from "../utils/getCardNumberErrorMessage";

export default function useCardNumberField() {
  const [cardNumbers, setCardNumbers] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });

  const cardBrand = getCardBrand(cardNumbers);

  const onCardNumberChange = (value: CardNumbers) => setCardNumbers(value);

  const isCardNumberValid =
    getCardNumberErrorMessage(cardNumbers, cardBrand) === null;

  return {
    cardNumbers,
    cardBrand,
    onCardNumberChange,
    isCardNumberValid,
  };
}
