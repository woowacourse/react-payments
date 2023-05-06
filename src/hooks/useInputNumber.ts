import { useState } from "react";
import { CardNumberIndex } from "../type/input";
import { validation } from "../validation/input";

export function useInputNumber() {
  const [cardNumber, setCardNumber] = useState<CardNumberIndex>({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });

  function changeNumberInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    if (value && !validation.isNumber(value)) {
      e.target.value = cardNumber[name];
    } else {
      setCardNumber({
        ...cardNumber,
        [name]: value,
      });
    }
  }

  return { cardNumber, changeNumberInput };
}
