import React, { useState } from "react";

const useUniqueNumberValidation = (
  dispatch: (action: { type: "SET_UNIQUE_NUMBER"; index: number; value: string }) => void,
) => {
  const [error, setError] = useState([false, false, false, false]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (v: string, index: number) => {
    if (/^[0-9]*$/.test(v)) {
      dispatch({ type: "SET_UNIQUE_NUMBER", index, value: v });

      setError((prev) => prev.map((item, i) => (i === index ? false : item)));
      return;
    }

    setError((prev) => prev.map((item, i) => (i === index ? true : item)));
    setErrorMessage("숫자만 입력해 주세요.");
  };

  return { error, errorMessage, handleChange };
};

export default useUniqueNumberValidation;
