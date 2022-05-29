import React, { createContext, useCallback, useState } from "react";

import { isInValidCardNumber, isOverMaxLength } from "util/validator";
import { focusNextElement, focusPrevElement } from "util/focus";
import useReady from "hooks/useReady";
import { MAX_LENGTH } from "constants/index";
import { SeveralInputType } from "types";

interface InitialContextState {
  cardNumber: SeveralInputType;
  cardNumberReady: boolean;
}

interface InitialContextValue {
  state: InitialContextState;
  action: {
    onChangeCardNumber: ({ target }: { target: HTMLInputElement }) => void;
    onKeyDownCardNumber: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    resetCardNumber: () => void;
    setCardNumber: React.Dispatch<React.SetStateAction<SeveralInputType>>;
  };
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
  const [cardNumber, setCardNumber] = useState<SeveralInputType>(initialState);

  const [cardNumberReady] = useReady(cardNumber, isInValidCardNumber);

  const onChangeCardNumber = ({ target }: { target: HTMLInputElement }) => {
    if (isOverMaxLength(target, MAX_LENGTH.CARD_NUMBER)) {
      return;
    }

    const element = target.nextSibling?.nextSibling as HTMLInputElement | null;
    if (element) {
      focusNextElement({
        target,
        value: cardNumber,
        maxLength: MAX_LENGTH.CARD_NUMBER,
        element,
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

  const onKeyDownCardNumber = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    const target = event.target as HTMLInputElement;
    const { key } = event;
    const element = target.previousSibling
      ?.previousSibling as HTMLInputElement | null;

    if (element) {
      focusPrevElement({
        target,
        key,
        element,
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
