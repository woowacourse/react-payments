import { useCallback, useState } from "react";
import {
  INITIAL_EXPIRE_DATE_STATE,
  EXPIRE_DATE_ERROR_MESSAGE,
} from "../constants";
import { ExpireDateState } from "../types";

const isValidMonth = (month: number) => {
  return month >= 1 && month <= 12;
};

const validateMonth = (month: string) => {
  if (isNaN(Number(month))) {
    return EXPIRE_DATE_ERROR_MESSAGE.INVALID_NUMBER;
  }

  if (!isValidMonth(Number(month))) {
    return EXPIRE_DATE_ERROR_MESSAGE.INVALID_MONTH_RANGE;
  }

  const isInvalidLength = month.length === 0 || month.length === 2;
  if (!isInvalidLength) {
    return EXPIRE_DATE_ERROR_MESSAGE.INVALID_MONTH_LENGTH;
  }

  return "";
};

const isValidYear = (year: string) => {
  return year.length === 2;
};

const validateYear = (year: string) => {
  if (isNaN(Number(year))) {
    return EXPIRE_DATE_ERROR_MESSAGE.INVALID_NUMBER;
  }

  if (!isValidYear(year)) {
    return EXPIRE_DATE_ERROR_MESSAGE.INVALID_YEAR_LENGTH;
  }

  return "";
};

const useControlledExpireDate = () => {
  const [expireDate, setExpireDate] = useState<ExpireDateState>(
    () => INITIAL_EXPIRE_DATE_STATE
  );

  const handleExpireMonthChange = useCallback((value: string) => {
    if (value.length > 2) {
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
