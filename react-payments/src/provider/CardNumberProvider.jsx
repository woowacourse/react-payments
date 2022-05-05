import { createContext, useState } from "react";
import { isInValidCardNumber, isOverMaxLength } from "../util/validator";
import { MAX_LENGTH } from "../constants";
import { focusNextElement, focusPrevElement } from "../util/focus";
import useReady from "../hooks/useReady";

export const CardNumberContext = createContext({
  first: "",
  second: "",
  third: "",
  fourth: "",
});

const CardNumberProvider = ({ children }) => {
  const [cardNumber, setCardNumber] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });

  const [cardNumberReady] = useReady(cardNumber, isInValidCardNumber);

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

  return (
    <CardNumberContext.Provider
      value={{
        state: { cardNumber, cardNumberReady },
        action: { onChangeCardNumber, onKeyDownCardNumber },
      }}
    >
      {children}
    </CardNumberContext.Provider>
  );
};

export default CardNumberProvider;
