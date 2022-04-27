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
    setCardNumber({
      ...cardNumber,
      [e.target.name]: e.target.value,
    });
  };

  const { first, second, third, fourth } = cardNumber;
  return [[first, second, third, fourth], onChangeCardNumber];
};

export default useCardNumber;
