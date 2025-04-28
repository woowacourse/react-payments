import { useCallback, useRef, useState } from "react";
import { EXPIRE_DATE_KEYS, INITIAL_EXPIRE_DATE_STATE } from "../constants";
import { ExpireDateInputKey, ExpireDateState } from "../types";
import { handleNextInputFocus } from "@/utils/handleNextInputFocus";

const useControlledExpireDate = () => {
  const [expireDate, setExpireDate] = useState<ExpireDateState>(
    INITIAL_EXPIRE_DATE_STATE
  );
  const expireDateInputRefs = {
    MM: useRef<HTMLInputElement>(null),
    YY: useRef<HTMLInputElement>(null),
  };

  const handleExpireChange = useCallback(
    (
      key: ExpireDateInputKey,
      value: string,
      validationFn: (value: string) => string
    ) => {
      if (value.length > 2) {
        return;
      }

      const errorMessage = validationFn(value);
      setExpireDate((prevState) => ({
        ...prevState,
        [key]: {
          value,
          errorMessage,
        },
      }));

      if (value.length !== 2 || errorMessage) {
        return;
      }

      handleNextInputFocus({
        key,
        keys: EXPIRE_DATE_KEYS,
        refs: expireDateInputRefs,
      });
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
