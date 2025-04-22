import React, { useState } from "react";

const useCvcNumberValidation = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validateInputType = (v: string) => {
    if (/^[0-9]*$/.test(v)) {
      setError(false);
      return true;
    }

    setError(true);
    setErrorMessage("숫자만 입력해 주세요.");
    return false;
  };

  return { error, errorMessage, validateInputType };
};

export default useCvcNumberValidation;
