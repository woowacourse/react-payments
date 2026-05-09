import { useState } from "react";
import { CARD_NUMBER_SEGMENT_LENGTHS } from "../constants/constants";

export function useCardForm() {
  const [cardNumber, setCardNumber] = useState(CARD_NUMBER_SEGMENT_LENGTHS.map(() => ""));
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
