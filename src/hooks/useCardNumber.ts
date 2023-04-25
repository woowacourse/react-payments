import { useState } from "react";

function useCardNumber() {
  const [originNumber, setOrginNumber] = useState("");
  const [displayNumber, setdisplayNumber] = useState("");

  const changeCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cardNumber = e.target.value.replace(/[^\d•]/g, "").slice(0, 16);

    if (originNumber.length > 8) {
      if (originNumber.length < cardNumber.length) {
        setOrginNumber(originNumber + cardNumber.slice(-1));
      }

      if (originNumber.length > cardNumber.length) {
        setOrginNumber(originNumber.slice(0, -1));
      }
    }

    if (originNumber.length <= 8) {
      setOrginNumber(cardNumber);
    }

    const hiddenNumber =
      cardNumber.length > 8
        ? cardNumber.slice(0, 8) + "•".repeat(cardNumber.length - 8)
        : cardNumber;
    const showNumber = hiddenNumber.match(/.{1,4}/g);
    const resultNumber = showNumber ? showNumber.join("-") : "";

    setdisplayNumber(resultNumber);
  };

  return { originNumber, displayNumber, changeCardNumber };
}

export default useCardNumber;
