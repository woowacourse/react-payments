import { useEffect, useState } from "react";
import { focusNextElement, focusPrevElement } from "../util/focus";
import { isOverMaxLength, isInValidCardNumber } from "../util/validator";
import { MAX_LENGTH } from "../constants";

const useCardNumber = () => {
  const [cardNumber, setCardNumber] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });
  const [cardNumberReady, setCardNumberReady] = useState(false);

  useEffect(() => {
    if (isInValidCardNumber(cardNumber) === cardNumberReady) {
      setCardNumberReady((prevReady) => !prevReady);
    }
  }, [cardNumber, cardNumberReady]);

  const onChangeCardNumber = ({ target }) => {
    if (isOverMaxLength(target, MAX_LENGTH.CARD_NUMBER)) {
      return;
    }

    const nextElement = target.nextSibling?.nextSibling;

    focusNextElement({
      target,
      value: cardNumber,
      maxLength: MAX_LENGTH.CARD_NUMBER,
      nextElement,
    });

    setCardNumber({
      ...cardNumber,
      [target.name]: target.value,
    });
  };

  const onKeyDownCardNumber = ({ target, key }) => {
    const prevElement = target.previousSibling?.previousSibling;

    focusPrevElement({
      target,
      key,
      value: cardNumber,
      prevElement,
    });
  };

  const { first, second, third, fourth } = cardNumber;
  return {
    cardNumber: [first, second, third, fourth],
    onChangeCardNumber,
    onKeyDownCardNumber,
    cardNumberReady,
  };
};

export default useCardNumber;
