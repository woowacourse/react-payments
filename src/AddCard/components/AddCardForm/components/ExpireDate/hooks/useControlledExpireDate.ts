import { useCallback, useState } from "react";
import { EXPIRE_DATE_LENGTH, INITIAL_EXPIRE_DATE_STATE } from "../constants";
import { ExpireDateState } from "../types";
import { validateMonth, validateYear } from "../validation";

const useControlledExpireDate = () => {
  const [expireDate, setExpireDate] = useState<ExpireDateState>(
    INITIAL_EXPIRE_DATE_STATE
  );

  const handleExpireMonthChange = useCallback((value: string) => {
    if (value.length > EXPIRE_DATE_LENGTH) {
      return;
    }
    if (isNaN(Number(value))) {
      return;
    }
    setExpireDate((prevState) => ({
      ...prevState,
      MM: {
        value,
        errorMessage: validateMonth(value),
      },
    }));
  }, []);

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

  const handleExpireYearChange = useCallback((value: string) => {
    if (value.length > 2) {
      return;
    }

    setExpireDate((prevState) => ({
      ...prevState,
      YY: {
        value,
        errorMessage: validateYear(value),
      },
    }));
  }, []);

  return {
    expireDate,
    handleExpireMonthChange,
    handleExpireYearChange,
    handleExpireMonthBlur,
  };
};

export default useControlledExpireDate;
