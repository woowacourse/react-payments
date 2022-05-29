import { createContext, useState } from "react";
import { isInValidCardNumber, isOverMaxLength } from "../util/validator";
import { MAX_LENGTH } from "../constants";
import { focusNextElement, focusPrevElement } from "../util/focus";
import useReady from "../hooks/useReady";
import {
  Target,
  KeyEventTarget,
  CardNumberContextProvider,
  CardNumber,
} from "../types";

const initialCardNumber: CardNumber = {
  first: "",
  second: "",
  third: "",
  fourth: "",
};

export const CardNumberContext = createContext<CardNumberContextProvider>({
  state: { cardNumber: initialCardNumber, cardNumberReady: false },
  action: {
    onChangeCardNumber: ({ target }) => null,
    onKeyDownCardNumber: ({ target, key }) => null,
    resetCardNumber: () => null,
  },
});

const CardNumberProvider = ({ children }: { children: React.ReactNode }) => {
  const [cardNumber, setCardNumber] = useState(initialCardNumber);

  const [cardNumberReady] = useReady(cardNumber, isInValidCardNumber);

  const onChangeCardNumber = ({ target }: Target) => {
    if (isOverMaxLength(target, MAX_LENGTH.CARD_NUMBER)) {
      return;
    }

    const nextElement = target.nextSibling
      ?.nextSibling as HTMLInputElement | null;

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

  const onKeyDownCardNumber = ({ target, key }: KeyEventTarget) => {
    const prevElement = target.previousSibling
      ?.previousSibling as HTMLInputElement | null;

    focusPrevElement({
      target,
      key,
      prevElement,
    });
  };

  const resetCardNumber = () => {
    setCardNumber({ ...initialCardNumber });
  };

  return (
    <CardNumberContext.Provider
      value={{
        state: { cardNumber, cardNumberReady },
        action: { onChangeCardNumber, onKeyDownCardNumber, resetCardNumber },
      }}
    >
      {children}
    </CardNumberContext.Provider>
  );
};

export default CardNumberProvider;
