import { useState, useEffect } from "react";

const useCardNumberForm = (onValidation: (isValid: boolean) => void) => {
  const [, setAllInputValid] = useState(false);
  const [inputValidities, setInputValidities] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
  });
  const [errorMessage, setErrorMessage] = useState("");

  const isValidCarNumber = (value: string) => /^[0-9]{4}$/.test(value);

  // NOTE: 각 입력 필드의 유효성 검사 결과를 업데이트하는 함수
  const updateInputValidity = (index: number, isValid: boolean) => {
    setInputValidities((prevValidities) => ({
      ...prevValidities,
      [index]: isValid,
    }));
  };

  useEffect(() => {
    const allValid = Object.values(inputValidities).every((isValid) => isValid);
    setAllInputValid(allValid);
    setErrorMessage(allValid ? "" : "4자리의 숫자를 입력해주세요.");

    if (onValidation) onValidation(allValid);
  }, [inputValidities]);

  return {
    updateInputValidity,
    isValidCarNumber,
    setErrorMessage,
    errorMessage,
  };
};

export default useCardNumberForm;
