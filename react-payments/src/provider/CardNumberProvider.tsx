import React, { createContext, useCallback, useState } from "react";

import { isInValidCardNumber, isOverMaxLength } from "util/validator";
import { focusNextElement, focusPrevElement } from "util/focus";
import useReady from "hooks/useReady";
import { MAX_LENGTH } from "constants/index";
import { CardNumberType } from "types";

interface InitialContextState {
  cardNumber: CardNumberType;
  cardNumberReady: boolean;
}

interface InitialContextValue {
  state: InitialContextState;
  action: {};
}

export const CardNumberContext =
  createContext<InitialContextValue | null>(null);

const initialState = {
  first: "",
  second: "",
  third: "",
  fourth: "",
};

const CardNumberProvider = ({ children }: { children: React.ReactNode }) => {
  const [cardNumber, setCardNumber] = useState<CardNumberType>(initialState);

  const [cardNumberReady] = useReady(cardNumber, isInValidCardNumber);

  const onChangeCardNumber = ({ target }: { target: HTMLInputElement }) => {
    if (isOverMaxLength(target, MAX_LENGTH.CARD_NUMBER)) {
      return;
    }

    const nextElement = target.nextSibling?.nextSibling;
    if (nextElement) {
      focusNextElement({
        target,
        value: cardNumber,
        maxLength: MAX_LENGTH.CARD_NUMBER,
        nextElement,
      });
    }
    setCardNumber({
      ...cardNumber,
      [target.name]: target.value,
    });
  };

  const resetCardNumber = useCallback(() => {
    setCardNumber({ ...initialState });
  }, []);

  const onKeyDownCardNumber = ({
    target,
    key,
  }: {
    target: HTMLInputElement;
    key: string;
  }) => {
    const prevElement = target.previousSibling?.previousSibling;

    if (prevElement) {
      focusPrevElement({
        target,
        key,
        prevElement,
      });
    }
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
