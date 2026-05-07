import { useState } from "react";

export function useCardForm() {
  const [cardNumber, setCardNumber] = useState(["", "", "", ""]);
  const [expireDate, setExpireDate] = useState(["", ""]);
  const [cvc, setCvc] = useState("");

  return {
    cardNumber: { value: cardNumber, set: setCardNumber },
    expireDate: { value: expireDate, set: setExpireDate },
    cvc: { value: cvc, set: setCvc },
  };
}
