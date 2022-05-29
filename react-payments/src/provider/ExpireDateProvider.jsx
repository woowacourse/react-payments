import { createContext, useState } from "react";
import { isInValidExpireDate, isOverMaxLength } from "../util/validator";
import { focusNextElement, focusPrevElement } from "../util/focus";
import { MAX_LENGTH } from "../constants";
import useReady from "../hooks/useReady";

export const ExpireDateContext = createContext();

const initialExpireDate = {
  month: "",
  year: "",
};

const ExpireDateProvider = ({ children }) => {
  const [expireDate, setExpireDate] = useState(initialExpireDate);
  const [expireDateReady] = useReady(expireDate, isInValidExpireDate);

  const onChangeExpireDate = ({ target }) => {
    if (isOverMaxLength(target, MAX_LENGTH.EXPIRE_DATE)) {
      return;
    }

    const nextElement = target.nextSibling?.nextSibling;

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

  const onKeyDownExpireDate = ({ target, key }) => {
    const prevElement = target.previousSibling?.previousSibling;

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
