import { useState } from "react";

export function useCardForm() {
  const [cardNumber, setCardNumber] = useState(["", "", "", ""]);
  const [expireDate, setExpireDate] = useState(["", ""]);
  const [cvc, setCvc] = useState("");
  const [cardBrand, setCardBrand] = useState("")
  return {
    cardNumber: { value: cardNumber, set: setCardNumber },
    expireDate: { value: expireDate, set: setExpireDate },
    cvc: { value: cvc, set: setCvc },
    cardBrand : {value : cardBrand , set : setCardBrand},
  };
}
