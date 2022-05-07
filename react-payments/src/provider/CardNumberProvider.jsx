import { createContext, useCallback, useState } from "react";

import { isInValidCardNumber, isOverMaxLength } from "util/validator";
import { focusNextElement, focusPrevElement } from "util/focus";
import useReady from "hooks/useReady";
import { MAX_LENGTH } from "constants";

export const CardNumberContext = createContext();

const initialState = {
  first: "",
  second: "",
  third: "",
  fourth: "",
};

const CardNumberProvider = ({ children }) => {
  const [cardNumber, setCardNumber] = useState(initialState);

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

  const resetCardNumber = useCallback(() => {
    setCardNumber({ ...initialState });
  }, []);

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
        action: {
          onChangeCardNumber,
          onKeyDownCardNumber,
          resetCardNumber,
          setCardNumber,
        },
      }}
    >
      {children}
    </CardNumberContext.Provider>
  );
};

export default CardNumberProvider;
