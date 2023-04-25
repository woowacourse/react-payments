import { useState } from "react";
import { validation } from "../validation/input";

export function useInputNumber() {
  const [cardNumber, setCardNumber] = useState<any>({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    if (!validation.isNumber(value)) {
      e.target.value = cardNumber[name];
    } else {
      setCardNumber({
        ...cardNumber,
        [name]: value,
      });
    }
  }

  return { cardNumber, handleChange };
}
