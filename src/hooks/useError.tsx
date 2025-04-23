import { useState } from "react";
const MONTH_MIN = 1;
const MONTH_MAX = 12;

const useError = (initialErrorState: boolean[]) => {
  const [error, setError] = useState(initialErrorState);
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

  const validateMonth = (v: string) => {
    const month = parseInt(v);
    if (month >= MONTH_MIN && month <= MONTH_MAX) {
      setError([false, error[1]]);
      return;
    }

    setError([true, error[1]]);
    setErrorMessage("1~12 사이의 숫자를 입력해 주세요.");
  };

  return { error, errorMessage, validateMonth, validateInputType };
};

export default useError;
