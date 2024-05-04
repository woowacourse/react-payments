import { useEffect, useState } from "react";

const useExpirationDateForm = (onValidation: (isValid: boolean) => void) => {
  const [, setAllInputValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValidity, setInputValidity] = useState({
    0: false,
    1: false,
  });

  const validateMonth = (value: string) => {
    const regex = /^(0[1-9]|1[0-2])$/;

    return regex.test(value);
  };

  const validateYear = (value: string) => {
    const intValue = Number(value);
    return !isNaN(intValue) && intValue >= 24 && intValue <= 29;
  };

  // NOTE: 각 입력 필드의 유효성 검사 결과를 업데이트
  const updateInputValidity = (index: number, isValid: boolean) => {
    setInputValidity((prevValidities) => ({
      ...prevValidities,
      [index]: isValid,
    }));
  };

  useEffect(() => {
    const allValid = Object.values(inputValidity).every((isValid) => isValid);

    setAllInputValid(allValid);
    setErrorMessage(allValid ? "" : "만료 기한을 올바르게 입력해주세요.");

    if (onValidation) onValidation(allValid);
  }, [inputValidity]);

  return { errorMessage, setErrorMessage, validateMonth, validateYear, updateInputValidity };
};

export default useExpirationDateForm;
