import React from "react";
import { useState } from "react";

const useExpirationDateValidation = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState([false, false]);

  const validateInputType = (v: string, index: number) => {
    if (/^[0-9]*$/.test(v)) {
      setError((prev) => prev.map((item, i) => (i === index ? false : item)));
      return true;
    }

    setError([true, error[1]]);
    setErrorMessage("숫자만 입력해 주세요.");
    return false;
  };

  const validateMonth = (v: string) => {
    const month = parseInt(v);
    if (month < 1 || month > 12) {
      setError([true, error[1]]);

      setErrorMessage("1~12 사이의 숫자를 입력해 주세요.");
      return;
    }
    setError([false, error[1]]);
  };

  return { error, errorMessage, validateInputType, validateMonth };
};

export default useExpirationDateValidation;
