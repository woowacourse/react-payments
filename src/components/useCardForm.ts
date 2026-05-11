import { useState } from "react";
import { DEFAULT_CARD_NUMBER_SEGMENTS } from "../constants/constants";

export function useCardForm() {
  const [cardNumber, setCardNumber] = useState(DEFAULT_CARD_NUMBER_SEGMENTS.map(() => ""));
  const [expireDate, setExpireDate] = useState(["", ""]);
  const [cvc, setCvc] = useState("");
  const [cardBrand, setCardBrand] = useState("")
  const [cardPassword, setCardPassword] = useState("")
  return {
    cardNumber: { value: cardNumber, set: setCardNumber },
    expireDate: { value: expireDate, set: setExpireDate },
    cvc: { value: cvc, set: setCvc },
    cardBrand : {value : cardBrand , set : setCardBrand},
    cardPassword : {value : cardPassword, set: setCardPassword}
  };
}
