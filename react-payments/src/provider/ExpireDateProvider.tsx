import { createContext, useState } from "react";
import { isInValidExpireDate, isOverMaxLength } from "../util/validator";
import { focusNextElement, focusPrevElement } from "../util/focus";
import { MAX_LENGTH } from "../constants";
import useReady from "../hooks/useReady";
import {
  ExpireDate,
  ExpireDateContextProvider,
  KeyEventTarget,
  Target,
} from "../types";

const initialExpireDate: ExpireDate = {
  month: "",
  year: "",
};

export const ExpireDateContext = createContext<ExpireDateContextProvider>({
  state: { expireDate: initialExpireDate, expireDateReady: false },
  action: {
    onChangeExpireDate: ({ target }) => null,
    onKeyDownExpireDate: ({ target, key }) => null,
    resetExpireDate: () => null,
  },
});

const ExpireDateProvider = ({ children }: { children: React.ReactNode }) => {
  const [expireDate, setExpireDate] = useState(initialExpireDate);
  const [expireDateReady] = useReady(expireDate, isInValidExpireDate);

  const onChangeExpireDate = ({ target }: Target) => {
    if (isOverMaxLength(target, MAX_LENGTH.EXPIRE_DATE)) {
      return;
    }

    const nextElement = target.nextSibling
      ?.nextSibling as HTMLInputElement | null;

    focusNextElement({
      target,
      value: expireDate,
      maxLength: MAX_LENGTH.EXPIRE_DATE,
      nextElement,
    });

    setExpireDate({
      ...expireDate,
      [target.name]: target.value,
    });
  };

  const onKeyDownExpireDate = ({ target, key }: KeyEventTarget) => {
    const prevElement = target.previousSibling
      ?.previousSibling as HTMLInputElement | null;

    focusPrevElement({
      target,
      key,
      prevElement,
    });
  };

  const resetExpireDate = () => {
    setExpireDate({ ...initialExpireDate });
  };

  return (
    <ExpireDateContext.Provider
      value={{
        state: { expireDate, expireDateReady },
        action: { onChangeExpireDate, onKeyDownExpireDate, resetExpireDate },
      }}
    >
      {children}
    </ExpireDateContext.Provider>
  );
};

export default ExpireDateProvider;
