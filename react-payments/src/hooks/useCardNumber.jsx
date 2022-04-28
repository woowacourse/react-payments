import { useState } from "react";

const useCardNumber = () => {
  const [cardNumber, setCardNumber] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });

  const onChangeCardNumber = (e) => {
    if (e.target.value.length > 4) {
      return;
    }

    if (
      cardNumber[e.target.name].length < e.target.value.length &&
      e.target.value.length === 4 &&
      e.target.name !== "fourth"
    ) {
      e.target.nextSibling.nextSibling.focus();
    }

    if (
      cardNumber[e.target.name].length > e.target.value.length &&
      e.target.value.length === 0 &&
      e.target.name !== "first"
    ) {
      e.target.previousSibling.previousSibling.focus();
    }

    setCardNumber({
      ...cardNumber,
      [e.target.name]: e.target.value,
    });
  };

  const { first, second, third, fourth } = cardNumber;
  return [[first, second, third, fourth], onChangeCardNumber];
};

export default useCardNumber;
