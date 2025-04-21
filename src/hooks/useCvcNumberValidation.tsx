import React, { useState } from "react";

const useCvcNumberValidation = (dispatch: (action: { type: "SET_CVC_NUMBER"; value: string }) => void) => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (v: string) => {
    if (/^[0-9]*$/.test(v)) {
      dispatch({ type: "SET_CVC_NUMBER", value: v });

      setError(false);
      return;
    }

    setError(true);
    setErrorMessage("숫자만 입력해 주세요.");
  };

  return { error, errorMessage, handleChange };
};

export default useCvcNumberValidation;
