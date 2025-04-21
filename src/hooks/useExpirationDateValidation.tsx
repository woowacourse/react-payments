import React from "react";
import { useState } from "react";

const useExpirationDateValidation = (
  dispatch: (action: { type: "SET_EXPIRATION_DATE"; index: number; value: string }) => void,
) => {
  const [monthError, setMonthError] = useState(false);
  const [yearError, setYearError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validateMonth = (v: string) => {
    const month = parseInt(v);
    if (month < 1 || month > 12) {
      setMonthError(true);
      setErrorMessage("1~12 사이의 숫자를 입력해 주세요.");
      return;
    }
    setMonthError(false);
  };

  const handleChangeMonth = (v: string) => {
    if (/^[0-9]*$/.test(v)) {
      validateMonth(v);
      dispatch({ type: "SET_EXPIRATION_DATE", index: 0, value: v });
      return;
    }
    setMonthError(true);
    setErrorMessage("숫자만 입력해 주세요.");
  };

  const handleChangeYear = (v: string) => {
    if (/^[0-9]*$/.test(v)) {
      dispatch({ type: "SET_EXPIRATION_DATE", index: 1, value: v });
      setYearError(false);
      return;
    }
    setYearError(true);
    setErrorMessage("숫자만 입력해 주세요.");
  };

  return { monthError, yearError, errorMessage, handleChangeMonth, handleChangeYear };
};

export default useExpirationDateValidation;
