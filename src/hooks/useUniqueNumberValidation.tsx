import React, { useState } from "react";

const useUniqueNumberValidation = () => {
  const [error, setError] = useState([false, false, false, false]);
  const [errorMessage, setErrorMessage] = useState("");

  const validateInputType = (v: string, index: number) => {
    if (/^[0-9]*$/.test(v)) {
      setError((prev) => prev.map((item, i) => (i === index ? false : item)));
      return true;
    }

    setError((prev) => prev.map((item, i) => (i === index ? true : item)));
    setErrorMessage("숫자만 입력해 주세요.");
    return false;
  };

  return { error, errorMessage, validateInputType };
};

export default useUniqueNumberValidation;
