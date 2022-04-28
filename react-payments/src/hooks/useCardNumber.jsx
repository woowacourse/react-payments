import { useState } from "react";
import { checkNextFocus, checkPrevFocus, isOverMaxLength } from "../util";
import { MAX_LENGTH } from "../constants";

const useCardNumber = () => {
  const [cardNumber, setCardNumber] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });

  const onChangeCardNumber = ({ target }) => {
    if (isOverMaxLength(target, MAX_LENGTH.CARD_NUMBER)) {
      return;
    }

    const nextElement = target.nextSibling?.nextSibling;
    const prevElement = target.previousSibling?.previousSibling;

    checkNextFocus({
      target,
      value: cardNumber,
      maxLength: MAX_LENGTH.CARD_NUMBER,
      nextElement,
    });
    checkPrevFocus({
      target,
      value: cardNumber,
      prevElement,
    });

    setCardNumber({
      ...cardNumber,
      [target.name]: target.value,
    });
  };

  const { first, second, third, fourth } = cardNumber;
  return [[first, second, third, fourth], onChangeCardNumber];
};

export default useCardNumber;
