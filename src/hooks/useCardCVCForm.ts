import { useEffect, useState } from "react";

const useCardCVCForm = (onValidation: (isValid: boolean) => void) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValidity, setInputValidity] = useState({
    0: false,
  });

  // NOTE: 각 입력 필드의 유효성 검사 결과를 업데이트
  const updateInputValidity = (index: number, isValid: boolean) => {
    setInputValidity((prevValidities) => ({
      ...prevValidities,
      [index]: isValid,
    }));
  };

  useEffect(() => {
    if (onValidation && inputValidity[0]) {
      onValidation(true);
      setErrorMessage("");
    }
    if (onValidation && !inputValidity[0]) {
      onValidation(false);
      setErrorMessage("3자리 수를 입력하세요.");
    }
  }, [inputValidity]);

  return { errorMessage, setErrorMessage, updateInputValidity };
};

export default useCardCVCForm;
