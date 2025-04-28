import { useCallback, useRef, useState } from "react";
import { EXPIRE_DATE_KEYS, INITIAL_EXPIRE_DATE_STATE } from "../constants";
import { ExpireDateInputKey, ExpireDateState } from "../types";
import { validateMonth, validateYear } from "../validation";

const useControlledExpireDate = () => {
  const [expireDate, setExpireDate] = useState<ExpireDateState>(
    INITIAL_EXPIRE_DATE_STATE
  );
  const expireDateInputRefs = {
    MM: useRef<HTMLInputElement>(null),
    YY: useRef<HTMLInputElement>(null),
  };

  const handleNextInputFocus = (
    key: ExpireDateInputKey,
    value: string,
    isValid: boolean
  ) => {
    if (value.length !== 2 || isValid) {
      return;
    }

    const index = EXPIRE_DATE_KEYS.indexOf(key);
    const nextKey = EXPIRE_DATE_KEYS[index + 1] as ExpireDateInputKey;
    const nextInputRef = expireDateInputRefs[nextKey];
    nextInputRef.current?.focus();
  };

  const handleExpireChange = useCallback(
    (key: ExpireDateInputKey, value: string) => {
      if (value.length > 2) {
        return;
      }

      const errorMessage =
        key === "MM" ? validateMonth(value) : validateYear(value);
      setExpireDate((prevState) => ({
        ...prevState,
        [key]: {
          value,
          errorMessage,
        },
      }));

      handleNextInputFocus(key, value, Boolean(errorMessage));
    },
    []
  );

  const handleExpireMonthBlur = useCallback((value: string) => {
    if (value.length !== 1) {
      return;
    }

    if (value !== "0") {
      setExpireDate((prevState) => ({
        ...prevState,
        MM: {
          value: `0${value}`,
          errorMessage: "",
        },
      }));
    }
  }, []);

  const checkExpireDateNextStep = useCallback((expireDate: ExpireDateState) => {
    const expireDateValues = Object.values(expireDate);
    const isValidLength = expireDateValues.every(
      ({ value }) => value.length === 2
    );
    const isValid = expireDateValues.every(
      ({ errorMessage }) => errorMessage === ""
    );
    const isValidExpireDate = isValidLength && isValid;

    if (!isValidExpireDate) {
      return false;
    }

    return true;
  }, []);

  return {
    expireDate,
    expireDateInputRefs,
    handleExpireChange,
    handleExpireMonthBlur,
    isNextStep: checkExpireDateNextStep(expireDate),
  };
};

export default useControlledExpireDate;
