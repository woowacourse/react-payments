import React, { createContext, useCallback, useState } from "react";

import { isInValidExpireDate, isOverMaxLength } from "util/validator";
import { focusNextElement, focusPrevElement } from "util/focus";
import { MAX_LENGTH } from "constants/index";
import useReady from "hooks/useReady";
import { ExpireDateType } from "types";

interface InitialContextState {
  expireDate: ExpireDateType;
  expireDateReady: boolean;
}

interface InitialContextValue {
  state: InitialContextState;
  action: {};
}

export const ExpireDateContext =
  createContext<InitialContextValue | null>(null);

const initialState = {
  month: "",
  year: "",
};

const ExpireDateProvider = ({ children }: { children: React.ReactNode }) => {
  const [expireDate, setExpireDate] = useState<ExpireDateType>(initialState);
  const [expireDateReady] = useReady(expireDate, isInValidExpireDate);

  const onChangeExpireDate = ({ target }: { target: HTMLInputElement }) => {
    if (isOverMaxLength(target, MAX_LENGTH.EXPIRE_DATE)) {
      return;
    }

    const nextElement = target.nextSibling?.nextSibling;
    if (nextElement) {
      focusNextElement({
        target,
        value: expireDate,
        maxLength: MAX_LENGTH.EXPIRE_DATE,
        nextElement,
      });
    }

    setExpireDate({
      ...expireDate,
      [target.name]: target.value,
    });
  };

  const onKeyDownExpireDate = ({
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

  const resetExpireDate = useCallback(() => {
    setExpireDate({ ...initialState });
  }, []);

  return (
    <ExpireDateContext.Provider
      value={{
        state: { expireDate, expireDateReady },
        action: {
          onChangeExpireDate,
          onKeyDownExpireDate,
          resetExpireDate,
          setExpireDate,
        },
      }}
    >
      {children}
    </ExpireDateContext.Provider>
  );
};

export default ExpireDateProvider;
