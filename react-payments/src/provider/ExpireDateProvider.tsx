import React, { createContext, useCallback, useState } from "react";

import { isInValidExpireDate, isOverMaxLength } from "util/validator";
import { focusNextElement, focusPrevElement } from "util/focus";
import { MAX_LENGTH } from "constants/index";
import useReady from "hooks/useReady";
import { SeveralInputType } from "types";

interface InitialContextState {
  expireDate: SeveralInputType;
  expireDateReady: boolean;
}

interface InitialContextValue {
  state: InitialContextState;
  action: {
    onChangeExpireDate: ({ target }: { target: HTMLInputElement }) => void;
    onKeyDownExpireDate: ({
      target,
      key,
    }: {
      target: HTMLInputElement;
      key: string;
    }) => void;
    resetExpireDate: () => void;
    setExpireDate: React.Dispatch<React.SetStateAction<SeveralInputType>>;
  };
}

export const ExpireDateContext =
  createContext<InitialContextValue | null>(null);

const initialState = {
  month: "",
  year: "",
};

const ExpireDateProvider = ({ children }: { children: React.ReactNode }) => {
  const [expireDate, setExpireDate] = useState<SeveralInputType>(initialState);
  const [expireDateReady] = useReady(expireDate, isInValidExpireDate);

  const onChangeExpireDate = ({ target }: { target: HTMLInputElement }) => {
    if (isOverMaxLength(target, MAX_LENGTH.EXPIRE_DATE)) {
      return;
    }

    const element = target.nextSibling?.nextSibling as HTMLInputElement | null;
    if (element) {
      focusNextElement({
        target,
        value: expireDate,
        maxLength: MAX_LENGTH.EXPIRE_DATE,
        element,
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
