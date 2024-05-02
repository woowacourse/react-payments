import { useEffect, useState } from "react";

const useCardOwnerForm = (onValidation: (isValid: boolean) => void) => {
  const [, setAllInputValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValidity, setInputValidity] = useState({ 0: false });

  // NOTE: 각 입력 필드의 유효성 검사 결과를 업데이트
  const updateInputValidity = (index: number, isValid: boolean) => {
    setInputValidity((prevValidities) => ({
      ...prevValidities,
      [index]: isValid,
    }));
  };

  // NOTE: 모든 입력 필드가 유효한지 검사
  useEffect(() => {
    const allValid = Object.values(inputValidity).every((isValid) => isValid);
    setAllInputValid(allValid);
    setErrorMessage(allValid ? "" : "이름은 30자 이하의 영문 대문자여야 합니다.");

    if (onValidation && allValid) onValidation(true);
    if (onValidation && !allValid) onValidation(false);
  }, [inputValidity]);

  return { errorMessage, setErrorMessage, updateInputValidity };
};

export default useCardOwnerForm;
