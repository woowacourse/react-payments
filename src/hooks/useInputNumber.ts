import { useState } from "react";
import { useError } from "./useError";

export function useInputNumber() {
  const [cardNumber, setCardNumber] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setCardNumber({
      ...cardNumber,
      [name]: value,
    });
  }

  return { cardNumber, handleChange };
}
